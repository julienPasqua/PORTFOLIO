type SectionTitleProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          {eyebrow}
        </p>
      )}

      <h2 className="max-w-3xl text-1xl font-black leading-tight tracking-tight md:text-3xl xl:text-3xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
