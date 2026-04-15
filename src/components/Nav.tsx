"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-paper/70 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between font-mono text-[13px]">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-block size-2 rounded-full bg-phosphor blink" />
          <span className="font-display text-xl italic tracking-tight text-ink">
            ghostmeet
          </span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-ink-dim">
          <a href="#features" className="hover:text-ink transition">features</a>
          <a href="#how" className="hover:text-ink transition">how it works</a>
          <a href="#demo" className="hover:text-ink transition">demo</a>
          <a href="#install" className="hover:text-ink transition">install</a>
        </div>
        <a
          href="https://github.com/Higangssh/ghostmeet"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 border border-line-strong hover:border-phosphor hover:text-phosphor transition-colors"
        >
          <Star className="size-3.5" />
          <span>star on github</span>
        </a>
      </div>
    </nav>
  );
}
