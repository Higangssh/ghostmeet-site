import { GhostOrb } from "./GhostOrb";
import { ArrowDownRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-32 px-6">
      <GhostOrb />

      <div className="mx-auto max-w-6xl relative">
        {/* Meta strip */}
        <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-faint flex items-center gap-4 mb-12 unfurl">
          <span>sshlab — dispatch 001</span>
          <span className="flex-1 rule" />
          <span className="text-phosphor/80">v0.1 · open source · MIT</span>
        </div>

        <h1 className="display-xl unfurl" style={{ animationDelay: "0.1s" }}>
          The <span className="italic-display">invisible</span>
          <br />
          AI meeting
          <br />
          assistant<span className="text-phosphor">.</span>
        </h1>

        <div
          className="mt-10 max-w-xl font-mono text-[15px] leading-relaxed text-ink-dim unfurl"
          style={{ animationDelay: "0.3s" }}
        >
          <p>
            Live captions and smart summaries for any meeting — captured
            silently from your browser tab, transcribed locally with Whisper,
            summarized with Claude on demand.
          </p>
          <p className="mt-5 text-ink">
            Your audio{" "}
            <span className="underline decoration-phosphor underline-offset-4 decoration-2">
              never leaves your machine
            </span>
            .
          </p>
        </div>

        <div
          className="mt-12 flex flex-wrap items-center gap-4 unfurl"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#install"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-3.5 font-mono text-[13px] tracking-wide hover:bg-phosphor transition-colors"
          >
            <Terminal className="size-4" />
            <span>docker compose up</span>
            <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#demo"
            className="font-mono text-[13px] text-ink-dim hover:text-ink transition underline underline-offset-4 decoration-line-strong"
          >
            watch it silently transcribe →
          </a>
        </div>

        {/* Side panel mockup */}
        <HeroMockup />

        {/* Bottom manifest */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[12px] text-ink-dim unfurl" style={{ animationDelay: "0.8s" }}>
          <Stat label="audio egress" value="0 bytes" accent />
          <Stat label="accounts required" value="none" />
          <Stat label="install command" value="1 line" />
          <Stat label="license" value="MIT" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-ink-faint uppercase tracking-[0.2em] text-[10px]">{label}</div>
      <div className={`mt-2 font-display text-3xl ${accent ? "text-phosphor" : "text-ink"}`}>
        {value}
      </div>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="mt-24 relative unfurl" style={{ animationDelay: "0.65s" }}>
      <div className="absolute -top-8 left-0 font-mono text-[11px] tracking-[0.22em] uppercase text-ink-faint">
        fig. 01 — chrome side panel, during a live call
      </div>
      <div className="grid md:grid-cols-[1.6fr_1fr] gap-0 border border-line-strong bg-paper-2">
        {/* Fake meet area */}
        <div className="relative p-8 bg-paper-3 border-b md:border-b-0 md:border-r border-line-strong min-h-[320px]">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint mb-6">
            meet.generic.invalid / room-3b7f
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Alex", "Jordan", "Sam", "Morgan"].map((name, i) => (
              <div
                key={name}
                className="aspect-video bg-paper flex items-end p-3 border border-line relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(circle at ${30 + i * 17}% ${40 + i * 10}%, rgba(245,241,232,0.12), transparent 50%)`,
                  }}
                />
                <span className="font-mono text-[11px] text-ink-dim relative">{name}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between font-mono text-[11px] text-ink-faint">
            <span>4 participants</span>
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-ember rec-dot" />
              00:12:47
            </span>
          </div>
        </div>

        {/* Side panel */}
        <div className="relative p-6 min-h-[320px] bg-paper-2 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <span className="font-display italic text-lg">👻 ghostmeet</span>
            <span className="font-mono text-[10px] text-phosphor flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-phosphor" />
              listening
            </span>
          </div>
          <div className="space-y-3 flex-1 font-mono text-[12px] leading-relaxed">
            <Caption speaker="Alex" time="12:31" text="okay so the migration needs to ship before friday —" />
            <Caption speaker="Jordan" time="12:33" text="we still need to backfill the audit table" />
            <Caption speaker="Sam" time="12:34" text="I can own that if morgan handles the dashboard" typing />
          </div>
          <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
            <div className="flex items-end gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="wave-bar"
                  style={{ animationDelay: `${i * 0.12}s`, height: `${8 + (i % 3) * 4}px` }}
                />
              ))}
            </div>
            <button className="font-mono text-[11px] px-3 py-1.5 border border-line-strong hover:bg-ink hover:text-paper transition">
              summarize →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Caption({
  speaker,
  time,
  text,
  typing,
}: {
  speaker: string;
  time: string;
  text: string;
  typing?: boolean;
}) {
  return (
    <div>
      <div className="text-ink-faint text-[10px] uppercase tracking-wider mb-0.5">
        {speaker} <span className="ml-1">{time}</span>
      </div>
      <div className={`text-ink ${typing ? "caret" : ""}`}>{text}</div>
    </div>
  );
}
