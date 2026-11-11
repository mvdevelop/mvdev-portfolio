import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonClass = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonClass;
  className?: string;
};

type ButtonProps = ButtonBaseProps & ComponentProps<"button">;
type ButtonLinkProps = ButtonBaseProps & ComponentProps<typeof Link>;

const variants: Record<ButtonClass, string> = {
  primary:
    "bg-[var(--primary-color)] text-white hover:-translate-y-0.5 hover:bg-white hover:text-black",
  secondary:
    "border border-[var(--border-color)] text-white hover:-translate-y-0.5 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]",
  ghost: "text-[var(--text-muted)] hover:text-white",
};

const baseClassName =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClassName} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`${baseClassName} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
