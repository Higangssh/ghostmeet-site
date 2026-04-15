import { SectionHeader } from "./SectionHeader";
import {
  Mic,
  Sparkles,
  Paperclip,
  Lock,
  Container,
  Ghost,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Real-time transcription",
    body: "Whisper STT runs in a loop, updating captions every 10 seconds. tiny → large models, pick your size.",
    tag: "faster-whisper",
  },
  {
    icon: Sparkles,
    title: "AI-powered summaries",
    body: "Key decisions, action items, next steps. On demand — hit Summarize when the meeting ends.",
    tag: "claude api",
  },
  {
    icon: Paperclip,
    title: "Meeting context",
    body: "Attach an agenda, a design doc, or a prior transcript. The summarizer actually reads them.",
    tag: "context input",
  },
  {
    icon: Lock,
    title: "100% local audio",
    body: "Audio is captured, streamed, and transcribed on your machine. Nothing is sent to a server you don't own.",
    tag: "zero egress",
  },
  {
    icon: Container,
    title: "One-command setup",
    body: "docker compose up -d. Three services, one port, ready in 30 seconds once the image pulls.",
    tag: "docker",
  },
  {
    icon: Ghost,
    title: "Invisible to others",
    body: "Runs as a Chrome side panel. No bot joins the call. No one in the meeting knows it's there.",
    tag: "side panel",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          num="02"
          kicker="the capabilities"
          title={
            <>
              Six things it does,
              <br />
              quietly, on your laptop.
            </>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line-strong border border-line-strong">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-paper p-8 hover:bg-paper-2 transition-colors group"
              >
                <div className="flex items-start justify-between mb-8">
                  <Icon className="size-5 text-ink group-hover:text-phosphor transition" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] text-ink-faint uppercase tracking-[0.18em]">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-3 leading-tight">
                  {f.title}
                </h3>
                <p className="font-mono text-[13px] leading-relaxed text-ink-dim">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
