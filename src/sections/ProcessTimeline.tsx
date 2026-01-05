"use client";
import { useEffect, useRef, useState } from "react";
import { AnimateIn } from "@/components/ui/animate-in";
import { cn } from "@/lib/utils";
import {
  Lightbulb,
  Code2,
  Rocket,
  CheckCircle2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

const timelineSteps = [
  {
    id: "discovery",
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Discovery",
    description: "Understanding your vision and requirements",
  },
  {
    id: "development",
    icon: <Code2 className="h-6 w-6" />,
    title: "Development",
    description: "Bringing ideas to life with clean code",
  },
  {
    id: "testing",
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Testing",
    description: "Ensuring quality and performance",
  },
  {
    id: "deployment",
    icon: <Rocket className="h-6 w-6" />,
    title: "Deployment",
    description: "Launching your solution to the world",
  },
  {
    id: "optimization",
    icon: <Zap className="h-6 w-6" />,
    title: "Optimization",
    description: "Continuous improvement and updates",
  },
];

const ProcessTimeline = () => {
  const t = useTranslations("ProcessTimeline");
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = parseInt(
              entry.target.getAttribute("data-step") || "0"
            );
            setActiveStep(step);
          }
        });
      },
      { threshold: 0.5 }
    );

    const steps = timelineRef.current?.querySelectorAll("[data-step]");
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <AnimateIn from="bottom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("description")}</p>
          </div>
        </AnimateIn>

        <div ref={timelineRef} className="max-w-4xl mx-auto">
          {timelineSteps.map((step, index) => (
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
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step.icon}
                </div>
                {index < timelineSteps.length - 1 && (
                  <div
                    className={cn(
                      "w-0.5 h-20 transition-colors duration-500",
                      index < activeStep
                        ? "bg-gradient-to-b from-purple-600 to-blue-600"
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
                <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-2">
                    {t(`${step.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`${step.id}.description`)}
                  </p>
                </div>
              </AnimateIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
