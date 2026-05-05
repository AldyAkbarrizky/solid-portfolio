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

        <TimelineList steps={timelineSteps} />
      </div>
    </section>
  );
};

export default ProcessTimeline;
