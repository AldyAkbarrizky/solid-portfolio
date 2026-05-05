import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";
import { GlowingButton } from "@/components/GlowingButton";
import { useTranslations } from "next-intl";
import Link from "next/link";

type CodeToken = {
  text: string;
  className?: string;
};

const codePreviewLines = [
  [
    { text: "import", className: "text-sky-400" },
    { text: " { ", className: "text-slate-200" },
    { text: "useState", className: "text-amber-300" },
    { text: " } ", className: "text-slate-200" },
    { text: "from", className: "text-sky-400" },
    { text: " 'react'", className: "text-emerald-400" },
    { text: ";", className: "text-slate-200" },
  ],
  [],
  [
    { text: "function", className: "text-violet-400" },
    { text: " App", className: "text-amber-300" },
    { text: "() ", className: "text-slate-200" },
    { text: "{", className: "text-slate-200" },
  ],
  [
    { text: "  const", className: "text-sky-400" },
    { text: " [", className: "text-slate-200" },
    { text: "count", className: "text-amber-300" },
    { text: ", ", className: "text-slate-200" },
    { text: "setCount", className: "text-amber-300" },
    { text: "] = ", className: "text-slate-200" },
    { text: "useState", className: "text-amber-300" },
    { text: "(", className: "text-slate-200" },
    { text: "0", className: "text-orange-400" },
    { text: ");", className: "text-slate-200" },
  ],
  [],
  [
    { text: "  return", className: "text-sky-400" },
    { text: " (", className: "text-slate-200" },
  ],
  [{ text: "    <div>", className: "text-violet-400" }],
  [
    { text: "      <h1>", className: "text-violet-400" },
    { text: "Count: ", className: "text-slate-100" },
    { text: "{count}", className: "text-amber-300" },
    { text: "</h1>", className: "text-violet-400" },
  ],
  [
    { text: "      <button", className: "text-violet-400" },
    { text: " onClick", className: "text-sky-300" },
    { text: "={", className: "text-slate-200" },
    { text: "() => ", className: "text-slate-200" },
    { text: "setCount", className: "text-amber-300" },
    { text: "(", className: "text-slate-200" },
    { text: "count", className: "text-amber-300" },
    { text: " + ", className: "text-slate-200" },
    { text: "1", className: "text-orange-400" },
    { text: ")}", className: "text-slate-200" },
    { text: ">", className: "text-violet-400" },
  ],
  [{ text: "        Increment", className: "text-slate-100" }],
  [{ text: "      </button>", className: "text-violet-400" }],
  [{ text: "    </div>", className: "text-violet-400" }],
  [{ text: "  );", className: "text-slate-200" }],
  [{ text: "}", className: "text-slate-200" }],
] satisfies CodeToken[][];

const coreElements = [
  { id: 1, icon: <Lightbulb className="h-5 w-5" />, label: "Discovery" },
  { id: 2, icon: <Users className="h-5 w-5" />, label: "Teamwork" },
  { id: 3, icon: <Zap className="h-5 w-5" />, label: "Delivery" },
];

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(124,58,237,0.14),transparent_34%,rgba(14,165,233,0.12)_72%,transparent)] dark:bg-[linear-gradient(115deg,rgba(124,58,237,0.18),transparent_38%,rgba(14,165,233,0.12)_76%,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_84%)] dark:opacity-25" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10">
            <AnimateIn from="left" delay={100}>
              <div className="mb-6 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-600 shadow-sm shadow-violet-500/10 dark:border-white/10 dark:bg-white/10 dark:text-violet-200">
                <Code2 className="h-4 w-4 mr-2" />
                {t("badge")}
              </div>
            </AnimateIn>

            <AnimateIn from="bottom" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t.rich("title", {
                  highlight: (chunks) => (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-600 dark:from-violet-500 dark:via-blue-500 dark:to-cyan-400">
                      {chunks}
                    </span>
                  ),
                })}
              </h1>
            </AnimateIn>

            <AnimateIn from="bottom" delay={300}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 lg:max-w-lg">
                {t("description")}
              </p>
            </AnimateIn>

            <AnimateIn from="bottom" delay={400}>
              <div className="flex flex-wrap gap-4">
                <GlowingButton href="#projects">
                  {t("getStartedButton")}
                </GlowingButton>
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2 text-md py-6"
                  size="lg"
                >
                  <Link href="mailto:ptsolidsejatheraselamanya@gmail.com">
                    {t("viewWorkButton")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimateIn>

            <AnimateIn from="bottom" delay={500}>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {coreElements.map((element) => (
                    <div
                      key={element.id}
                      title={element.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-card text-violet-600 shadow-md shadow-slate-900/10 dark:bg-white/10 dark:text-violet-200"
                    >
                      {element.icon}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">{t("trustedBy")}</p>
                  <div className="mt-1 flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CheckCircle2
                        key={index}
                        className="h-4 w-4 text-emerald-500"
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {t("reviews")}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn from="right" duration={800}>
            <div className="relative min-h-[380px] w-full lg:min-h-[500px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,rgba(124,58,237,0.18),rgba(14,165,233,0.14),transparent_68%)] blur-2xl dark:bg-[linear-gradient(135deg,rgba(124,58,237,0.22),rgba(14,165,233,0.18),transparent_70%)]" />

              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/30 sm:p-7">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

                <div className="relative z-10 flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:border-white/10 dark:bg-white/10 dark:text-violet-200">
                      {t("productReady")}
                    </div>
                    <div className="hidden rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-700 shadow-sm shadow-cyan-500/10 dark:text-cyan-200 sm:block">
                      {t("maintainable")}
                    </div>
                  </div>

                  <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-900/10 bg-[#070b18] shadow-xl shadow-slate-950/25 dark:border-white/10">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] p-4">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-emerald-500" />
                      <div className="ml-4 text-xs text-slate-300">app.js</div>
                    </div>
                    <pre className="min-h-0 flex-1 overflow-auto p-4 text-[11px] font-mono leading-normal sm:text-xs">
                      <code>
                        {codePreviewLines.map((line, index) => (
                          <span
                            key={index}
                            className="flex mt-1.5 first:mt-0"
                          >
                            <span className="w-7 shrink-0 select-none text-slate-500">
                              {index + 1}
                            </span>
                            <span className="whitespace-pre">
                              {line.map((token, tokenIndex) => (
                                <span
                                  key={`${index}-${tokenIndex}`}
                                  className={token.className}
                                >
                                  {token.text}
                                </span>
                              ))}
                            </span>
                          </span>
                        ))}
                      </code>
                    </pre>
                  </div>

                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
