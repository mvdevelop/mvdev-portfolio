interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      {label && (
        <span className="mb-4 inline-block rounded-full border border-[#232C3F] bg-[#141A28] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#007bff]">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold text-[#F8FAFC] md:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.6] text-[#94A3B8] md:text-[17px]">{subtitle}</p>}
    </div>
  );
}
