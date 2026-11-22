import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonClass = "primary" | "secondary" | "ghost";
type ButtonBaseProps = { children: ReactNode; variant?: ButtonClass; className?: string };
type ButtonProps = ButtonBaseProps & ComponentProps<"button">;
type ButtonLinkProps = ButtonBaseProps & ComponentProps<typeof Link>;

const variants: Record<ButtonClass, string> = {
  primary: "bg-[#0A66C2] text-white hover:-translate-y-0.5 hover:bg-[#084C91]",
  secondary: "border border-[#3A465E] bg-transparent text-[#F1F5F9] hover:-translate-y-0.5 hover:border-[#60A5FA] hover:text-[#60A5FA]",
  ghost: "text-[#CBD5E1] hover:text-[#F8FAFC] hover:shadow-[0_0_8px_#F8FAFC]/50",
};
const baseClassName = "inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA] disabled:cursor-not-allowed disabled:opacity-60";

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`${baseClassName} ${variants[variant]} ${className}`} {...props}>{children}</button>;
}

export function ButtonLink({ children, variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${baseClassName} ${variants[variant]} ${className}`} {...props}>{children}</Link>;
}
