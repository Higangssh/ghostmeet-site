import { GhostOrb } from "./GhostOrb";
import { ArrowDownRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-32 px-6 min-h-[86vh] flex items-center">
      <GhostOrb />

      <div className="mx-auto max-w-6xl relative w-full">
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
            href="#demo"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-3.5 font-mono text-[13px] tracking-wide hover:bg-phosphor transition-colors"
          >
            <Terminal className="size-4" />
            <span>press play on the demo</span>
            <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#install"
            className="font-mono text-[13px] text-ink-dim hover:text-ink transition underline underline-offset-4 decoration-line-strong"
          >
            skip to install →
          </a>
        </div>

        {/* Bottom manifest */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[12px] text-ink-dim unfurl" style={{ animationDelay: "0.8s" }}>
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
