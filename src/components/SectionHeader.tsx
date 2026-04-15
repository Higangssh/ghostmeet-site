export function SectionHeader({
  num,
  kicker,
  title,
  lede,
}: {
  num: string;
  kicker: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <div className="mb-16 md:mb-20">
      <div className="flex items-baseline gap-6 mb-8">
        <span className="section-num">§ {num}</span>
        <span className="flex-1 rule" />
        <span className="section-num">{kicker}</span>
      </div>
      <h2 className="display-lg max-w-4xl">{title}</h2>
      {lede && (
        <p className="mt-6 max-w-2xl font-mono text-[14px] leading-relaxed text-ink-dim">
          {lede}
        </p>
      )}
    </div>
  );
}
