"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Code2, Lightbulb, Rocket, Zap } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { cn } from "@/lib/utils";

type TimelineStep = {
  id: string;
  title: string;
  description: string;
};

type TimelineListProps = {
  steps: TimelineStep[];
};

const stepIcons = {
  discovery: Lightbulb,
  development: Code2,
  testing: CheckCircle2,
  deployment: Rocket,
  optimization: Zap,
};

export default function TimelineList({ steps }: TimelineListProps) {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const nextStep = Number(entry.target.getAttribute("data-step") ?? 0);
          setActiveStep((currentStep) =>
            currentStep === nextStep ? currentStep : nextStep
          );
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = timelineRef.current?.querySelectorAll("[data-step]");
    stepElements?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="relative mx-auto max-w-5xl">
      <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-border md:block" />
      {steps.map((step, index) => {
        const Icon = stepIcons[step.id as keyof typeof stepIcons] ?? Lightbulb;

        return (
          <div
            key={step.id}
            data-step={index}
            className="relative grid gap-5 pb-5 md:grid-cols-[4rem_1fr] md:pb-4"
          >
            <div className="relative z-10 flex items-start justify-start md:justify-center">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500",
                  index <= activeStep
                    ? "border-primary/40 bg-primary text-primary-foreground shadow-[0_16px_45px_rgb(0_0_0/0.16)]"
                    : "border-border bg-card text-muted-foreground"
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
            </div>
            <AnimateIn
              from={index % 2 === 0 ? "right" : "left"}
              delay={index * 100}
              className="flex-1"
            >
              <div
                className={cn(
                  "editorial-surface rounded-2xl p-6 transition-all duration-500",
                  index === activeStep && "border-primary/45 bg-card"
                )}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted sm:mt-3 sm:w-32">
                    <div
                      className={cn(
                        "h-full rounded-full bg-primary transition-all duration-700",
                        index <= activeStep ? "w-full" : "w-0"
                      )}
                    />
                  </div>
                </div>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          </div>
        );
      })}
    </div>
  );
}
