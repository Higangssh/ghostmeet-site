import { SectionHeader } from "./SectionHeader";
import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    feature: "monthly cost",
    otter: "$30 / month",
    ghost: "free",
    local: "free",
  },
  {
    feature: "your audio is",
    otter: "uploaded to cloud",
    ghost: "never uploaded",
    local: "never uploaded",
  },
  {
    feature: "sign-up required",
    otter: "yes",
    ghost: "no",
    local: "no",
  },
  {
    feature: "AI summaries",
    otter: "yes",
    ghost: "yes — bring your own key",
    local: "no",
  },
  {
    feature: "works on any tab",
    otter: "native apps only",
    ghost: "any tab with audio",
    local: "OS recording",
  },
  {
    feature: "source available",
    otter: "closed",
    ghost: "MIT",
    local: "varies",
  },
];

export function Compare() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          num="01"
          kicker="the positioning"
          title={
            <>
              You do not need to <span className="italic-display">rent</span>
              <br />
              a transcript service.
            </>
          }
          lede="Three ways to get a meeting summary. Only one is private, free, and open."
        />

        <div className="border-t border-line-strong">
          <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint py-4 border-b border-line">
            <div />
            <div>otter.ai</div>
            <div className="text-phosphor">ghostmeet</div>
            <div>local recording</div>
          </div>

          {rows.map((r) => (
            <div
              key={r.feature}
              className="grid grid-cols-[1.2fr_1fr_1fr_1fr] py-6 border-b border-line items-center"
            >
              <div className="font-display text-xl text-ink">{r.feature}</div>
              <Cell kind="otter" text={r.otter} />
              <Cell kind="ghost" text={r.ghost} />
              <Cell kind="local" text={r.local} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cell({
  kind,
  text,
}: {
  kind: "otter" | "ghost" | "local";
  text: string;
}) {
  const icon =
    kind === "ghost" ? (
      <Check className="size-3.5 text-phosphor" />
    ) : kind === "otter" ? (
      <X className="size-3.5 text-ember/70" />
    ) : (
      <Minus className="size-3.5 text-ink-faint" />
    );
  const color =
    kind === "ghost" ? "text-ink" : kind === "otter" ? "text-ink-dim" : "text-ink-faint";
  return (
    <div className={`font-mono text-[13px] flex items-start gap-2 ${color}`}>
      <span className="mt-1">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
