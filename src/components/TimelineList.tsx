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
    <div ref={timelineRef} className="max-w-4xl mx-auto">
      {steps.map((step, index) => {
        const Icon = stepIcons[step.id as keyof typeof stepIcons] ?? Lightbulb;

        return (
          <div
            key={step.id}
            data-step={index}
            className="relative flex items-start last:mb-0"
          >
            <div className="flex flex-col items-center mr-6">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500",
                  index <= activeStep
                    ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
                    : "bg-muted text-muted-foreground"
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-0.5 h-20 transition-colors duration-500",
                    index < activeStep
                      ? "bg-gradient-to-b from-violet-600 to-cyan-600"
                      : "bg-muted"
                  )}
                />
              )}
            </div>
            <AnimateIn
              from={index % 2 === 0 ? "right" : "left"}
              delay={index * 100}
              className="flex-1"
            >
              <div className="bg-card p-6 rounded-lg border border-border/80 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </AnimateIn>
          </div>
        );
      })}
    </div>
  );
}
