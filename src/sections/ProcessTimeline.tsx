import { AnimateIn } from "@/components/ui/animate-in";
import TimelineList from "@/components/TimelineList";
import { useTranslations } from "next-intl";

const ProcessTimeline = () => {
  const t = useTranslations("ProcessTimeline");
  const timelineSteps = [
    {
      id: "discovery",
      title: t("discovery.title"),
      description: t("discovery.description"),
    },
    {
      id: "development",
      title: t("development.title"),
      description: t("development.description"),
    },
    {
      id: "testing",
      title: t("testing.title"),
      description: t("testing.description"),
    },
    {
      id: "deployment",
      title: t("deployment.title"),
      description: t("deployment.description"),
    },
    {
      id: "optimization",
      title: t("optimization.title"),
      description: t("optimization.description"),
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-background py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container px-4 mx-auto">
        <AnimateIn from="bottom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="mt-3 section-title">{t("title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t("description")}
            </p>
          </div>
        </AnimateIn>

        <TimelineList steps={timelineSteps} />
      </div>
    </section>
  );
};

export default ProcessTimeline;
