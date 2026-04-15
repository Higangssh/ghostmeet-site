"use client";
import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const dockerCmd = `git clone https://github.com/Higangssh/ghostmeet.git
cd ghostmeet
cp .env.example .env  # add your Anthropic key (optional)
docker compose up -d`;

const manualCmd = `python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python -m backend`;

export function QuickStart() {
  const [tab, setTab] = useState<"docker" | "manual">("docker");
  const [copied, setCopied] = useState(false);

  const cmd = tab === "docker" ? dockerCmd : manualCmd;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="install" className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          num="04"
          kicker="the install"
          title={
            <>
              Running in under
              <br />
              a minute.
            </>
          }
          lede="Clone, start the backend, load the Chrome extension. That's the whole setup."
        />

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div>
            <div className="flex items-center gap-px bg-line-strong p-px w-fit">
              {(["docker", "manual"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition ${
                    tab === t
                      ? "bg-ink text-paper"
                      : "bg-paper text-ink-dim hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-4 border border-line-strong bg-paper-2 relative">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-line">
                <span className="flex items-center gap-2 font-mono text-[11px] text-ink-faint">
                  <Terminal className="size-3.5" /> ~/projects
                </span>
                <button
                  onClick={copy}
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint hover:text-phosphor transition"
                >
                  {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
                  {copied ? "copied" : "copy"}
                </button>
              </div>
              <pre className="p-5 overflow-x-auto font-mono text-[13px] leading-relaxed text-ink">
                {cmd.split("\n").map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-ink-faint select-none">{String(i + 1).padStart(2, " ")}</span>
                    <span>
                      {line.startsWith("#") ? (
                        <span className="text-ink-faint">{line}</span>
                      ) : (
                        <>
                          <span className="text-phosphor">$</span>{" "}
                          <span>{line}</span>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </pre>
            </div>

            <div className="mt-6 font-mono text-[12px] text-ink-dim leading-relaxed">
              <span className="text-ink-faint">note.</span>{" "}
              First run downloads the Whisper model (~150MB for{" "}
              <code className="text-phosphor">base</code>
              ). Subsequent starts are instant.
            </div>
          </div>

          <div className="space-y-6">
            <InstallStep
              n="01"
              title="Start the backend"
              body="docker compose up -d. Backend binds to localhost:8877. Health check returns model info."
            />
            <InstallStep
              n="02"
              title="Load the extension"
              body="chrome://extensions → Developer mode → Load unpacked → pick /extension from the repo."
            />
            <InstallStep
              n="03"
              title="Start a meeting"
              body="Click 👻 in the toolbar to open the side panel. Hit ▶ Start. Captions stream in real time."
            />
            <InstallStep
              n="04"
              title="Summarize when done"
              body="Click 📋 Summarize. A structured summary — decisions, action items, next steps — appears in the panel."
              accent
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InstallStep({ n, title, body, accent }: { n: string; title: string; body: string; accent?: boolean }) {
  return (
    <div className="flex gap-5 group">
      <div className="pt-1">
        <span className={`font-mono text-[11px] tracking-[0.2em] ${accent ? "text-phosphor" : "text-ink-faint"}`}>
          {n}
        </span>
      </div>
      <div className="flex-1 pb-6 border-b border-line">
        <div className="font-display text-2xl mb-1.5">{title}</div>
        <div className="font-mono text-[13px] text-ink-dim leading-relaxed">{body}</div>
      </div>
    </div>
  );
}
