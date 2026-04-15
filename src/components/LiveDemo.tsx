"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Sparkles, FileText } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { utterances, summary, demoDurationMs } from "@/content/demo-script";

type Visible = { speaker: string; color: string; text: string; displayed: string; done: boolean };

const CHAR_INTERVAL_MS = 22; // speed of live caption typewriter

export function LiveDemo() {
  const [playing, setPlaying] = useState(false);
  const [tick, setTick] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const startedAt = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    const loop = (now: number) => {
      if (startedAt.current === null) startedAt.current = now;
      const e = now - startedAt.current;
      setElapsed(e);
      setTick((t) => t + 1);
      if (e < demoDurationMs + 500) {
        raf.current = requestAnimationFrame(loop);
      } else {
        setPlaying(false);
      }
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [playing]);

  const visible: Visible[] = useMemo(() => {
    return utterances
      .filter((u) => elapsed >= u.at)
      .map((u) => {
        const localMs = elapsed - u.at;
        const chars = Math.min(u.text.length, Math.floor(localMs / CHAR_INTERVAL_MS));
        return {
          speaker: u.speaker,
          color: u.color,
          text: u.text,
          displayed: u.text.slice(0, chars),
          done: chars >= u.text.length,
        };
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  const handlePlay = () => {
    if (!playing && elapsed >= demoDurationMs) {
      // restart
      startedAt.current = null;
      setElapsed(0);
      setShowSummary(false);
    }
    setPlaying((p) => !p);
  };

  const handleReset = () => {
    setPlaying(false);
    setShowSummary(false);
    setElapsed(0);
    setTick(0);
    startedAt.current = null;
  };

  const totalSec = Math.floor(elapsed / 1000);
  const timeStr = `${String(Math.floor(totalSec / 60)).padStart(2, "0")}:${String(totalSec % 60).padStart(2, "0")}`;

  const canSummarize = elapsed >= demoDurationMs - 2000;

  return (
    <section id="demo" className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          num="04"
          kicker="a silent demo"
          title={
            <>
              Press play.
              <br />
              <span className="italic-display">It works like this.</span>
            </>
          }
          lede="A fully scripted re-enactment of a real session. All speakers, names, and content are fictional."
        />

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-[12px]">
          <button
            onClick={handlePlay}
            className="flex items-center gap-2 px-4 py-2 bg-ink text-paper hover:bg-phosphor transition"
          >
            {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            <span>
              {elapsed >= demoDurationMs
                ? "replay"
                : playing
                  ? "pause"
                  : elapsed > 0
                    ? "resume"
                    : "start demo"}
            </span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 border border-line-strong text-ink-dim hover:text-ink hover:border-ink transition"
          >
            <RotateCcw className="size-3.5" />
            reset
          </button>
          <div className="flex-1 h-px bg-line-strong mx-2" />
          <span className="text-ink-faint uppercase tracking-[0.18em] text-[10px]">
            elapsed {timeStr} / 00:22
          </span>
        </div>

        {/* Stage */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-0 border border-line-strong bg-paper-2 min-h-[520px]">
          {/* Fake meeting UI */}
          <div className="relative bg-paper-3 border-b md:border-b-0 md:border-r border-line-strong p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
              <span>meet.generic.invalid / weekly-sync</span>
              <span className="flex items-center gap-2">
                <span className={`size-1.5 rounded-full bg-ember ${playing ? "rec-dot" : ""}`} />
                rec {timeStr}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1 content-center">
              {["Alex", "Jordan", "Sam", "Morgan"].map((name, i) => {
                const isSpeaking =
                  playing &&
                  visible.length > 0 &&
                  visible[visible.length - 1]?.speaker === name &&
                  !visible[visible.length - 1]?.done;
                return (
                  <div
                    key={name}
                    className={`aspect-video bg-paper flex items-end p-3 border transition-colors relative overflow-hidden ${
                      isSpeaking ? "border-phosphor" : "border-line"
                    }`}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: `radial-gradient(circle at ${30 + i * 17}% ${40 + i * 10}%, rgba(245,241,232,0.12), transparent 50%)`,
                      }}
                    />
                    {isSpeaking && (
                      <div className="absolute top-2 right-2 flex items-end gap-0.5">
                        {[0, 1, 2].map((j) => (
                          <span
                            key={j}
                            className="wave-bar"
                            style={{ animationDelay: `${j * 0.15}s`, height: "10px" }}
                          />
                        ))}
                      </div>
                    )}
                    <span className="font-mono text-[11px] text-ink-dim relative">{name}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 font-mono text-[11px] text-ink-faint flex items-center justify-between">
              <span>4 participants · audio-only</span>
              <span>the meeting does not know ghostmeet is here</span>
            </div>
          </div>

          {/* Side panel */}
          <div className="relative p-6 flex flex-col bg-paper-2">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-line">
              <div className="flex items-center gap-2">
                <span className="font-display italic text-xl">👻 ghostmeet</span>
                <span className="font-mono text-[10px] text-ink-faint">side panel</span>
              </div>
              {playing ? (
                <span className="font-mono text-[10px] text-phosphor flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-phosphor" />
                  listening
                </span>
              ) : (
                <span className="font-mono text-[10px] text-ink-faint">idle</span>
              )}
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 font-mono text-[12px] leading-relaxed max-h-[380px] pr-1">
              {visible.length === 0 && !showSummary && (
                <div className="text-ink-faint italic">
                  no captions yet. press start to watch a live session unfold.
                </div>
              )}
              {visible.map((v, i) => (
                <div key={i} className="unfurl">
                  <div
                    className="text-[10px] uppercase tracking-wider mb-0.5"
                    style={{ color: v.color }}
                  >
                    {v.speaker}
                  </div>
                  <div className={`text-ink ${!v.done ? "caret" : ""}`}>
                    {v.displayed}
                  </div>
                </div>
              ))}

              {showSummary && <SummaryCard />}
            </div>

            <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
              <div className="flex items-end gap-0.5 h-[14px]">
                {playing && visible.some((v) => !v.done) ? (
                  [0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="wave-bar"
                      style={{ animationDelay: `${i * 0.12}s`, height: `${8 + (i % 3) * 4}px` }}
                    />
                  ))
                ) : (
                  <span className="text-[10px] text-ink-faint font-mono">—</span>
                )}
              </div>
              <button
                disabled={!canSummarize || showSummary}
                onClick={() => setShowSummary(true)}
                className={`flex items-center gap-2 font-mono text-[11px] px-3 py-1.5 border transition ${
                  canSummarize && !showSummary
                    ? "border-phosphor text-phosphor hover:bg-phosphor hover:text-paper"
                    : "border-line text-ink-faint cursor-not-allowed"
                }`}
              >
                <Sparkles className="size-3.5" />
                {showSummary ? "summarized" : "summarize"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryCard() {
  return (
    <div className="mt-4 border border-phosphor/40 bg-paper p-5 unfurl">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="size-3.5 text-phosphor" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-phosphor">
          AI SUMMARY · claude
        </span>
      </div>
      <div className="font-display text-lg mb-4 text-ink">{summary.title}</div>

      <div className="mb-4">
        <div className="text-[10px] uppercase tracking-[0.18em] text-ink-faint mb-2">
          decisions
        </div>
        <ul className="space-y-1 text-ink">
          {summary.decisions.map((d) => (
            <li key={d} className="flex gap-2">
              <span className="text-phosphor">▸</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <div className="text-[10px] uppercase tracking-[0.18em] text-ink-faint mb-2">
          action items
        </div>
        <ul className="space-y-2">
          {summary.actionItems.map((a, i) => (
            <li key={i}>
              <span className="text-phosphor">{a.who}</span>{" "}
              <span className="text-ink-dim">— {a.what}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-ink-faint mb-2">
          next
        </div>
        <div className="text-ink-dim">{summary.nextSteps}</div>
      </div>
    </div>
  );
}
