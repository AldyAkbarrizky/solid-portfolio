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
import Image from "next/image";

const approaches = [
  {
    id: 1,
    slug: "discovery",
    icon: <Lightbulb className="h-12 w-12 text-yellow-500 opacity-80" />,
    delay: 100,
  },
  {
    id: 2,
    slug: "design",
    icon: <Code2 className="h-12 w-12 text-violet-600 opacity-80" />,
    delay: 200,
  },
  {
    id: 3,
    slug: "agile",
    icon: <Rocket className="h-12 w-12 text-cyan-600 opacity-80" />,
    delay: 300,
  },
  {
    id: 4,
    slug: "testing",
    icon: <ShieldCheck className="h-12 w-12 text-green-500 opacity-80" />,
    delay: 400,
  },
  {
    id: 5,
    slug: "launch",
    icon: <BarChart className="h-12 w-12 text-red-500 opacity-80" />,
    delay: 500,
  },
  {
    id: 6,
    slug: "continuous",
    icon: <Zap className="h-12 w-12 text-orange-500 opacity-80" />,
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
    <section id="approach" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <AnimateIn from="bottom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("description")}</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach) => (
            <AnimateIn key={approach.id} from="bottom" delay={approach.delay}>
              <BentoCard
                className="h-full hover:border-primary/40 transition-all"
                gradient
              >
                <div className="flex justify-center mb-6">{approach.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  {t(`approaches.${approach.slug}.title`)}
                </h3>
                <p className="text-muted-foreground text-center">
                  {t(`approaches.${approach.slug}.description`)}
                </p>
              </BentoCard>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn from="bottom" delay={700}>
          <div className="mt-20 rounded-lg border border-border/80 bg-card p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t("title2")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t("description2")}
                </p>
                <ul className="space-y-3">
                  {featureKeys.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="min-w-4 min-h-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 mt-1.5" />
                      <span>{t(`keyfeatures.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-accent/50" />
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Team working together"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Approach;
