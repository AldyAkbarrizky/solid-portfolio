import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  glowColor?: string;
}

export function GlowingButton({
  className,
  glowColor = "rgba(255, 255, 255, 0.5)",
  children,
  ...props
}: GlowingButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-medium text-white transition-all hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 -z-10 transform-gpu blur-xl transition-all duration-500 group-hover:blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          opacity: 0.7,
        }}
      />
    </button>
  );
}
