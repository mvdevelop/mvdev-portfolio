import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonClass = "primary" | "secondary" | "ghost";
type ButtonBaseProps = { children: ReactNode; variant?: ButtonClass; className?: string };
type ButtonProps = ButtonBaseProps & ComponentProps<"button">;
type ButtonLinkProps = ButtonBaseProps & ComponentProps<typeof Link>;

const variants: Record<ButtonClass, string> = {
  primary: "bg-[#007bff] text-white hover:-translate-y-0.5 hover:bg-[#339dff] hover:shadow-[0_0_20px_rgba(248,250,252,0.7),0_0_40px_rgba(248,250,252,0.4)]",
  secondary: "border border-[#3A465E] bg-transparent text-[#F1F5F9] hover:-translate-y-0.5 hover:border-[#F8FAFC] hover:text-[#F8FAFC]",
  ghost: "text-[#CBD5E1] hover:text-[#F8FAFC] hover:shadow-[0_0_8px_rgba(248,250,252,0.3)]",
};
const baseClassName = "inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-60";

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`${baseClassName} ${variants[variant]} ${className}`} {...props}>{children}</button>;
}

export function ButtonLink({ children, variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${baseClassName} ${variants[variant]} ${className}`} {...props}>{children}</Link>;
}
