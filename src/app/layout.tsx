import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-font",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ghostmeet.sshlab.dev"),
  title: "ghostmeet — the invisible AI meeting assistant",
  description:
    "Live captions and smart summaries for any meeting, running 100% on your own machine. Self-hosted. No accounts. No cloud. Open source.",
  openGraph: {
    title: "ghostmeet — the invisible AI meeting assistant",
    description:
      "Self-hosted Otter.ai alternative. Whisper-powered transcription + Claude summaries. Your audio never leaves your machine.",
    url: "https://ghostmeet.sshlab.dev",
    siteName: "ghostmeet",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ghostmeet — the invisible AI meeting assistant",
    description:
      "Self-hosted, 100% local meeting transcription + AI summaries. One binary. No cloud.",
    images: ["/og.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain scanlines">
        {children}
      </body>
    </html>
  );
}
