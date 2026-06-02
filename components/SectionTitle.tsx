interface SectionTitleProps {
    label?: string;
    title: string;
    subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
    return (
        <div className="text-center mb-16">
            {label && (
                <span className="inline-block text-sm font-semibold text-[var(--primary-color)] px-5 py-1.5 rounded-full bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 mb-4">
                    {label}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-unbounded text-white">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
