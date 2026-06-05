"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  from?: "bottom" | "top" | "left" | "right" | "scale" | "opacity";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function AnimateIn({
  children,
  className,
  from = "bottom",
  delay = 0,
  duration = 500,
  once = true,
}: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getInitialStyles = () => {
    switch (from) {
      case "bottom":
        return "translate-y-12 opacity-0 blur-sm";
      case "top":
        return "-translate-y-12 opacity-0 blur-sm";
      case "left":
        return "-translate-x-12 opacity-0 blur-sm";
      case "right":
        return "translate-x-12 opacity-0 blur-sm";
      case "scale":
        return "scale-95 opacity-0 blur-sm";
      case "opacity":
        return "opacity-0";
      default:
        return "translate-y-10 opacity-0";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, hasAnimated]);

  return (
    <div
      ref={ref}
      className={cn(
        "transform-gpu transition-all ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible
          ? "translate-y-0 translate-x-0 scale-100 opacity-100 blur-0"
          : getInitialStyles(),
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
