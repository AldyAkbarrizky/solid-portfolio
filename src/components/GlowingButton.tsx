import { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  glowColor?: string;
  href?: string;
}

export function GlowingButton({
  className,
  glowColor = "rgba(100, 67, 196, 0.35)",
  children,
  href,
  ...props
}: GlowingButtonProps) {
  const glowClassName = cn(
    "group relative inline-flex h-12 overflow-hidden rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-[0_18px_45px_rgb(0_0_0/0.16)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 -z-10 transform-gpu blur-xl transition-all duration-500 group-hover:blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          opacity: 0.7,
        }}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={glowClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={glowClassName} {...props}>
      {content}
    </button>
  );
}
