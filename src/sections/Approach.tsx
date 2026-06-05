import { AnimateIn } from "@/components/ui/animate-in";
import BentoCard from "@/components/BentoCard";
import {
  BarChart,
  Code2,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

const approaches = [
  {
    id: 1,
    slug: "discovery",
    icon: <Lightbulb className="h-5 w-5" />,
    delay: 100,
  },
  {
    id: 2,
    slug: "design",
    icon: <Code2 className="h-5 w-5" />,
    delay: 200,
  },
  {
    id: 3,
    slug: "agile",
    icon: <Rocket className="h-5 w-5" />,
    delay: 300,
  },
  {
    id: 4,
    slug: "testing",
    icon: <ShieldCheck className="h-5 w-5" />,
    delay: 400,
  },
  {
    id: 5,
    slug: "launch",
    icon: <BarChart className="h-5 w-5" />,
    delay: 500,
  },
  {
    id: 6,
    slug: "continuous",
    icon: <Zap className="h-5 w-5" />,
    delay: 600,
  },
];

const featureKeys = [
  "expertise",
  "fullStack",
  "userCentered",
  "scalableArch",
  "ongoingSupport",
];

const Approach = () => {
  const t = useTranslations("Approach");
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-background py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container px-4 mx-auto">
        <AnimateIn from="bottom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="mt-3 section-title">{t("title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t("description")}
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {approaches.map((approach) => (
            <AnimateIn key={approach.id} from="bottom" delay={approach.delay}>
              <BentoCard
                className="h-full border-border/70 transition-all hover:border-primary/40"
                gradient={approach.id % 2 === 0}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-display text-5xl font-semibold text-primary/65">
                    {String(approach.id).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-border/70 bg-background/60 p-3 text-primary">
                    {approach.icon}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold leading-none">
                  {t(`approaches.${approach.slug}.title`)}
                </h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {t(`approaches.${approach.slug}.description`)}
                </p>
              </BentoCard>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn from="bottom" delay={700}>
          <div className="mt-16 overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 shadow-sm backdrop-blur">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 md:p-10">
                <p className="section-kicker">{t("agreementKicker")}</p>
                <h3 className="mt-4 font-display text-4xl font-semibold leading-none">
                  {t("title2")}
                </h3>
                <p className="mt-5 leading-8 text-muted-foreground">
                  {t("description2")}
                </p>
              </div>
              <div className="grid gap-0 border-t border-border/70 lg:border-l lg:border-t-0">
                <ul className="divide-y divide-border/70">
                  {featureKeys.map((item, index) => (
                    <li key={item} className="flex items-start gap-4 p-5">
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                      <span className="leading-7">
                        {t(`keyfeatures.${item}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Approach;
