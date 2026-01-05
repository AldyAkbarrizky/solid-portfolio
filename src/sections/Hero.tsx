import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";
import { GlowingButton } from "@/components/GlowingButton";
import { useTranslations } from "next-intl";
import { CheckCircle2, ShieldCheck, Users, Lightbulb, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("Hero");

  const coreElements = [
    { id: 1, icon: <Lightbulb className="w-5 h-5" />, label: "Innovation" },
    { id: 2, icon: <Users className="w-5 h-5" />, label: "Teamwork" },
    { id: 3, icon: <Zap className="w-5 h-5" />, label: "Agility" },
  ];

  const commitmentIconsCount = 5;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute top-0 -left-40 md:left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateIn from="left" delay={100}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium mb-6">
                <Code2 className="h-4 w-4 mr-2" />
                {t("badge")}
              </div>
            </AnimateIn>

            <AnimateIn from="bottom" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t.rich("title", {
                  highlight: (chunks) => (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
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
                <Link href="#projects">
                  <GlowingButton>{t("getStartedButton")}</GlowingButton>
                </Link>
                <Link href="#team">
                  <Button variant="outline" className="flex items-center gap-2 text-md py-6" size="lg">
                    {t("viewWorkButton")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn from="bottom" delay={500}>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {coreElements.map((element) => (
                    <div
                      key={element.id}
                      title={element.label}
                      className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium"
                    >
                      {element.icon || element.label.substring(0, 1)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">{t("trustedBy")}</p>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: commitmentIconsCount }).map(
                      (_, i) => (
                        <CheckCircle2
                          key={i}
                          className="w-4 h-4 text-green-500"
                        />
                      )
                    )}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {" "}
                      {t("reviews")}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn from="right" duration={800}>
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-full"></div>

                {/* Code snippets or UI mockups could go here */}
                <div className="absolute top-10 left-10 right-10 bottom-10 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 overflow-hidden">
                  <div className="p-4 border-b border-white/10 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-white/70">app.js</div>
                  </div>
                  <div className="p-4 text-xs text-white/80 font-mono">
                    <div className="flex">
                      <span className="text-white/40 mr-4">1</span>
                      <span className="text-blue-400">import</span>
                      <span className="text-white ml-2">{"{"}</span>
                      <span className="text-yellow-300 ml-2">useState</span>
                      <span className="text-white ml-2">{"}"}</span>
                      <span className="text-blue-400 ml-2">from</span>
                      <span className="text-green-400 ml-2">'react'</span>
                      <span className="text-white">;</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">2</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">3</span>
                      <span className="text-purple-400">function</span>
                      <span className="text-yellow-300 ml-2">App</span>
                      <span className="text-white">()</span>
                      <span className="text-white ml-2">{"{"}</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">4</span>
                      <span className="ml-4 text-blue-400">const</span>
                      <span className="ml-2 text-white">[</span>
                      <span className="text-yellow-300">count</span>
                      <span className="text-white">,</span>
                      <span className="ml-2 text-yellow-300">setCount</span>
                      <span className="text-white">]</span>
                      <span className="ml-2 text-white">=</span>
                      <span className="ml-2 text-yellow-300">useState</span>
                      <span className="text-white">(</span>
                      <span className="text-orange-400">0</span>
                      <span className="text-white">);</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">5</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">6</span>
                      <span className="ml-4 text-blue-400">return</span>
                      <span className="ml-2 text-white">(</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">7</span>
                      <span className="ml-8 text-purple-400">{"<div>"}</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">8</span>
                      <span className="ml-12 text-purple-400">{"<h1>"}</span>
                      <span className="text-white">Count: {"{count}"}</span>
                      <span className="text-purple-400">{"</h1>"}</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">9</span>
                      <span className="ml-12 text-purple-400">{"<button"}</span>
                      <span className="ml-2 text-blue-300">onClick</span>
                      <span className="text-white">=</span>
                      <span className="text-white">{"{"}</span>
                      <span className="text-white">() ={">"}</span>
                      <span className="ml-2 text-yellow-300">setCount</span>
                      <span className="text-white">(</span>
                      <span className="text-yellow-300">count</span>
                      <span className="ml-2 text-white">+</span>
                      <span className="ml-2 text-orange-400">1</span>
                      <span className="text-white">)</span>
                      <span className="text-white">{"}"}</span>
                      <span className="text-purple-400">{">"}</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">10</span>
                      <span className="ml-8 text-purple-400">{"</div>"}</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">11</span>
                      <span className="ml-4 text-white">)</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-white/40 mr-4">11</span>
                      <span className="text-white">{"}"}</span>
                    </div>
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
