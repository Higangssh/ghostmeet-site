import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Browser tab",
    body: "Any tab that plays audio — Meet, Zoom, Teams, a podcast, a training video.",
    tech: "chrome.tabCapture",
  },
  {
    n: "02",
    title: "Extension captures",
    body: "Chrome side panel taps the tab's audio stream directly. No microphone, no screen.",
    tech: "manifest v3 · chrome extension",
  },
  {
    n: "03",
    title: "WebSocket → local",
    body: "Audio frames stream to a FastAPI backend running on localhost:8877.",
    tech: "binary ws",
  },
  {
    n: "04",
    title: "Whisper transcribes",
    body: "faster-whisper processes 10-second chunks. Captions appear in the side panel as they're ready.",
    tech: "faster-whisper · ctranslate2",
  },
  {
    n: "05",
    title: "Claude summarizes",
    body: "When you click Summarize, the full transcript + any attached context goes to Claude. Structured output returns.",
    tech: "claude api · optional",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-28 md:py-36 px-6 relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          num="03"
          kicker="the pipeline"
          title={
            <>
              From a tab playing audio,
              <br />
              to a structured summary,
              <br />
              <span className="italic-display">without leaving your machine.</span>
            </>
          }
        />

        <div className="relative">
          <div className="absolute left-[34px] top-2 bottom-2 w-px bg-line-strong hidden md:block" />
          <div className="space-y-10">
            {steps.map((s) => (
              <div
                key={s.n}
                className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 items-start"
              >
                <div className="relative">
                  <div className="size-[70px] rounded-full border border-line-strong bg-paper flex items-center justify-center font-display text-2xl">
                    {s.n}
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-3xl md:text-4xl mb-3">
                    {s.title}
                  </h3>
                  <p className="font-mono text-[14px] leading-relaxed text-ink-dim max-w-2xl mb-3">
                    {s.body}
                  </p>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-phosphor/70">
                    {s.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 border border-line-strong bg-paper-2/50 max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-4">
              the only external call
            </div>
            <p className="font-display text-2xl leading-snug">
              If you enable AI summaries, your <em>transcript text</em> (never audio)
              is sent to the Claude API using <em>your own key</em>.
              That is the complete list of times your data leaves your machine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
