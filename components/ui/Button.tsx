import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonClass = "primary" | "secondary" | "ghost";
type ButtonBaseProps = { children: ReactNode; variant?: ButtonClass; className?: string };
type ButtonProps = ButtonBaseProps & ComponentProps<"button">;
type ButtonLinkProps = ButtonBaseProps & ComponentProps<typeof Link>;

const variants: Record<ButtonClass, string> = {
  primary: "bg-[#2563EB] text-white hover:-translate-y-0.5 hover:bg-[#3B82F6]",
  secondary: "border border-[#334155] bg-transparent text-[#E2E8F0] hover:-translate-y-0.5 hover:border-[#3B82F6] hover:text-[#60A5FA]",
  ghost: "text-[#CBD5E1] hover:text-[#60A5FA]",
};
const baseClassName = "inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA] disabled:cursor-not-allowed disabled:opacity-60";

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`${baseClassName} ${variants[variant]} ${className}`} {...props}>{children}</button>;
}

export function ButtonLink({ children, variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${baseClassName} ${variants[variant]} ${className}`} {...props}>{children}</Link>;
}
