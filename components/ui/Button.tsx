import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#fcb216] text-white shadow-lg shadow-amber/25 hover:-translate-y-0.5 hover:shadow-amber/40",
  ghost:
    "border border-white/20 text-white hover:border-amber/50 hover:text-amber",
  outline:
    "border border-night/20 text-night hover:border-amber hover:text-amber",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0";

  const classes = [base, variants[variant], className].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
