import { ArrowUpRight, Star } from "lucide-react";
import { GhostOrb } from "./GhostOrb";

export function CTA() {
  return (
    <section className="relative py-32 md:py-44 px-6 border-t border-line">
      <GhostOrb />
      <div className="mx-auto max-w-4xl text-center relative">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-phosphor mb-8">
          sshlab — dispatch 001 · end
        </div>
        <h2 className="display-xl">
          Keep your meetings
          <br />
          <span className="italic-display">on your own machine.</span>
        </h2>
        <p className="mt-10 font-mono text-[14px] text-ink-dim max-w-xl mx-auto leading-relaxed">
          ghostmeet is free, open source, and runs entirely on your machine.
          Clone it, run it, keep it.
        </p>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/Higangssh/ghostmeet"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-3.5 font-mono text-[13px] tracking-wide hover:bg-phosphor transition-colors"
          >
            <Star className="size-4" />
            star on github
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#install"
            className="inline-flex items-center gap-2 px-6 py-3.5 font-mono text-[13px] border border-line-strong text-ink hover:border-ink transition"
          >
            install locally →
          </a>
        </div>
      </div>
    </section>
  );
}
