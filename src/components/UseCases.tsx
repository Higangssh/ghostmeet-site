import { SectionHeader } from "./SectionHeader";

const cases = [
  {
    kicker: "for engineering",
    title: "Standups that write themselves.",
    body: "Start the panel, join the daily. Walk away with structured notes and a list of action items tagged by owner. No copy-paste into Notion.",
    detail: "← no bot joins · no dial-in · no seat license",
  },
  {
    kicker: "for 1:1s",
    title: "Coaching you actually re-read.",
    body: "Private conversations deserve private tooling. Your weekly 1:1 transcript lives on your laptop, not in a vendor's S3 bucket.",
    detail: "← audio stays local · summaries only if you ask",
  },
  {
    kicker: "for research",
    title: "User interviews, without the compliance review.",
    body: "Customer conversations often come with NDAs that forbid third-party transcription services. ghostmeet sidesteps the entire category.",
    detail: "← self-hosted · no data processor agreements",
  },
];

export function UseCases() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          num="06"
          kicker="who this is for"
          title={
            <>
              Three meetings a week
              <br />
              you stop <span className="italic-display">taking notes</span> for.
            </>
          }
        />

        <div className="space-y-px bg-line-strong border-y border-line-strong">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className="bg-paper p-8 md:p-12 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-start hover:bg-paper-2 transition-colors"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-mono text-[12px] text-phosphor">
                  {c.kicker}
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">
                  {c.title}
                </h3>
                <p className="font-mono text-[14px] leading-relaxed text-ink-dim max-w-xl">
                  {c.body}
                </p>
              </div>
              <div className="font-mono text-[11px] text-ink-faint leading-relaxed">
                {c.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
