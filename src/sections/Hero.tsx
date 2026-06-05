import { ArrowRight, CheckCircle2, Layers3, PenTool, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";
import { GlowingButton } from "@/components/GlowingButton";
import { useTranslations } from "next-intl";
import Link from "next/link";

const capabilities = [
  { id: "strategy", icon: PenTool },
  { id: "build", icon: Layers3 },
  { id: "launch", icon: Rocket },
];

const canvasSteps = ["scope", "interface", "release"];

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative isolate overflow-hidden bg-background pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="grain-overlay absolute inset-0 opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_84%)]" />
        <div className="absolute left-1/2 top-10 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-48 w-full -translate-x-1/2 bg-gradient-to-t from-secondary/60 to-transparent" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          <AnimateIn from="bottom" delay={80}>
            <h1 className="mx-auto max-w-[22rem] text-4xl font-extrabold leading-[1.04] tracking-tight text-balance sm:max-w-3xl sm:text-5xl md:max-w-5xl md:text-6xl lg:text-7xl">
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="relative inline-block text-primary">
                    {chunks}
                    <span className="absolute inset-x-0 bottom-1 -z-10 h-2 rounded-full bg-primary/14 md:h-3" />
                  </span>
                ),
              })}
            </h1>
          </AnimateIn>

          <AnimateIn from="bottom" delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              {t("description")}
            </p>
          </AnimateIn>

          <AnimateIn from="bottom" delay={240}>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <GlowingButton href="#projects" className="w-full justify-center sm:w-auto">
                {t("getStartedButton")}
              </GlowingButton>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full rounded-full border-border/80 bg-card/70 px-6 text-base sm:w-auto"
                size="lg"
              >
                <Link href="mailto:ptsolidsejatheraselamanya@gmail.com">
                  {t("viewWorkButton")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn from="bottom" delay={350} duration={800}>
          <div className="mx-auto mt-12 max-w-6xl rounded-[1.5rem] border border-border/70 bg-card/72 p-3 shadow-[0_24px_90px_rgb(0_0_0/0.12)] backdrop-blur-xl sm:rounded-[2rem] sm:p-4">
            <div className="grid min-w-0 gap-4 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="min-w-0 rounded-2xl border border-border/70 bg-background/60 p-5 text-left sm:rounded-3xl sm:p-6">
                <p className="section-kicker">{t("canvasKicker")}</p>
                <h2 className="mt-3 max-w-lg text-2xl font-bold leading-tight text-balance sm:text-3xl md:text-4xl">
                  {t("canvasTitle")}
                </h2>
                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {capabilities.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.id} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">
                            {t(`capabilities.${item.id}.title`)}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {t(`capabilities.${item.id}.description`)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {canvasSteps.map((step, index) => (
                  <div
                    key={step}
                    className="min-w-0 rounded-2xl border border-border/70 bg-background/60 p-5 text-left sm:rounded-3xl"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold">
                      {t(`canvasSteps.${step}.title`)}
                    </h3>
                    <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
                      {t(`canvasSteps.${step}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
