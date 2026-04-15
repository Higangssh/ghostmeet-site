import { ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const qs = [
  {
    q: "Is my audio really private?",
    a: "Yes. Audio is captured by the Chrome extension, streamed over WebSocket to a backend running on localhost, and transcribed by Whisper on your machine. It is never uploaded. The only external call — and only if you opt in — is a Claude API request with the transcript text when you click Summarize.",
  },
  {
    q: "Which meeting apps are supported?",
    a: "Any browser tab that plays audio. Google Meet, Zoom Web, Microsoft Teams Web, Discord, Around, Whereby, as well as recorded talks, podcasts, or training videos. Native Zoom/Teams desktop apps are not supported — use the web client.",
  },
  {
    q: "Do I need a GPU?",
    a: "No. The default `base` Whisper model runs fine on CPU for most voices. Larger models (`small`, `medium`, `large`) benefit from CUDA, but `base` is surprisingly accurate and what most people run.",
  },
  {
    q: "Why self-host at all?",
    a: "Hosted transcription services are convenient, but they require uploading audio to a vendor's servers and trusting their data-handling policies. For internal meetings, customer calls under NDA, or any conversation where privacy matters, self-hosting removes the upload entirely. You set it up once and own the stack.",
  },
  {
    q: "Can I host the backend on a separate machine?",
    a: "Yes. The backend is a FastAPI + WebSocket server. Run it on a home server, a VM, a Raspberry Pi, or anywhere you can reach over the network. Set the extension's target URL accordingly.",
  },
  {
    q: "What about speaker diarization?",
    a: "Not yet. It's on the roadmap. Current captions stream with a single speaker label per chunk. If you need 'who said what', follow the repo — it's the next major feature.",
  },
  {
    q: "Does it work offline?",
    a: "Transcription, yes — Whisper runs locally. Summarization requires the Claude API, which needs internet. You can disable summaries entirely and use ghostmeet as a pure offline captioner.",
  },
];

export function FAQ() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader num="06" kicker="the questions" title={<>Fair questions,<br />direct answers.</>} />

        <div className="border-t border-line-strong">
          {qs.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="list-none cursor-pointer py-6 flex items-center gap-4">
                <ChevronRight className="size-4 text-ink-faint chev" />
                <span className="font-display text-xl md:text-2xl text-ink flex-1">
                  {item.q}
                </span>
              </summary>
              <div className="pb-6 pl-8 font-mono text-[14px] leading-relaxed text-ink-dim max-w-3xl">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
