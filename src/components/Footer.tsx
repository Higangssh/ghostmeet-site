export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-line font-mono text-[11px] text-ink-faint">
      <div className="mx-auto max-w-6xl flex flex-wrap gap-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block size-1.5 rounded-full bg-phosphor" />
          <span className="font-display italic text-base text-ink">ghostmeet</span>
          <span className="opacity-60">— made at sshlab</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Higangssh/ghostmeet"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink"
          >
            source
          </a>
          <a
            href="https://github.com/Higangssh/ghostmeet/issues"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink"
          >
            issues
          </a>
          <a
            href="https://github.com/Higangssh/ghostmeet#roadmap"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink"
          >
            roadmap
          </a>
          <span className="opacity-60">MIT · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
