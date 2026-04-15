// All speakers and content are fictional — used for demonstrating the UI only.
export type Utterance = {
  speaker: "Alex" | "Jordan" | "Sam" | "Morgan";
  color: string;
  at: number; // ms offset from demo start
  text: string;
};

export const utterances: Utterance[] = [
  {
    speaker: "Alex",
    color: "#a3ff6b",
    at: 400,
    text: "Okay — quick sync on the migration before we wrap.",
  },
  {
    speaker: "Jordan",
    color: "#ff6b35",
    at: 3200,
    text: "We still haven't decided what to do about the audit table backfill.",
  },
  {
    speaker: "Alex",
    color: "#a3ff6b",
    at: 6400,
    text: "Right. If we ship on Friday we need that done by Thursday EOD.",
  },
  {
    speaker: "Sam",
    color: "#f5f1e8",
    at: 9800,
    text: "I can own the backfill if Morgan handles the dashboard migration.",
  },
  {
    speaker: "Morgan",
    color: "#b8b2a1",
    at: 13200,
    text: "Works for me. I'll have a PR up tomorrow morning.",
  },
  {
    speaker: "Jordan",
    color: "#ff6b35",
    at: 16500,
    text: "One thing — we need to communicate downtime to support before cutover.",
  },
  {
    speaker: "Alex",
    color: "#a3ff6b",
    at: 19800,
    text: "Good catch. I'll draft the comms this afternoon.",
  },
];

export const summary = {
  title: "Weekly migration sync — summary",
  decisions: [
    "Ship migration on Friday",
    "Backfill audit table before cutover",
  ],
  actionItems: [
    { who: "Sam", what: "Own audit table backfill — deadline Thursday EOD" },
    { who: "Morgan", what: "Migrate dashboard — PR by tomorrow morning" },
    { who: "Alex", what: "Draft downtime comms for support team — this afternoon" },
  ],
  nextSteps: "Reconvene Friday 10am for cutover checkpoint.",
};

export const demoDurationMs = 22000;
