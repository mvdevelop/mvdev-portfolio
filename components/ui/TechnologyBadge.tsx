type TechnologyBadgeProps = {
  children: string;
};

export default function TechnologyBadge({ children }: TechnologyBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border-color)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-gray-300">
      {children}
    </span>
  );
}
