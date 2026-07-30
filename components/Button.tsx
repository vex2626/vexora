import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "outline" | "ghost";
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid:
    "bg-[#bf12ee] text-white shadow-[0_18px_60px_rgba(191,18,238,0.28)] hover:bg-[#a80fd1] hover:shadow-[0_22px_88px_rgba(124,58,237,0.36)]",
  outline:
    "border border-[#bf12ee]/40 text-violet-100 hover:bg-white/5 hover:text-white hover:border-[#6366F1]/70",
  ghost: "text-slate-200 hover:bg-white/5",
};

export default function Button({
  variant = "solid",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300 will-change-transform ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
