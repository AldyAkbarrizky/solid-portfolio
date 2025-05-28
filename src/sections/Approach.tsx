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
    title: "Discovery & Strategy",
    description:
      "We start with a deep dive into your business goals, user needs, and technical requirements to create a comprehensive roadmap.",
    icon: <Lightbulb className="h-12 w-12 text-yellow-500 opacity-80" />,
    delay: 100,
  },
  {
    id: 2,
    title: "Design & Architecture",
    description:
      "Our design process balances aesthetics with functionality, while our technical architecture ensures scalability and performance.",
    icon: <Code2 className="h-12 w-12 text-purple-500 opacity-80" />,
    delay: 200,
  },
  {
    id: 3,
    title: "Agile Development",
    description:
      "We employ agile methodologies with two-week sprints, continuous integration, and regular client updates to ensure transparency.",
    icon: <Rocket className="h-12 w-12 text-blue-500 opacity-80" />,
    delay: 300,
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing protocols, automated CI/CD pipelines, and comprehensive QA processes ensure reliable, bug-free software.",
    icon: <ShieldCheck className="h-12 w-12 text-green-500 opacity-80" />,
    delay: 400,
  },
  {
    id: 5,
    title: "Launch & Optimization",
    description:
      "We ensure smooth deployments and provide post-launch monitoring, optimization, and support for continuous improvement.",
    icon: <BarChart className="h-12 w-12 text-red-500 opacity-80" />,
    delay: 500,
  },
  {
    id: 6,
    title: "Continuous Innovation",
    description:
      "We stay at the forefront of technology trends, regularly suggesting improvements and new features to keep your product ahead of the curve.",
    icon: <Zap className="h-12 w-12 text-orange-500 opacity-80" />,
    delay: 600,
  },
];

const Approach = () => {
  const t = useTranslations("Approach");
  return (
    <section id="approach" className="py-20 bg-background/50">
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
                className="h-full hover:border-purple-500/50 transition-all"
                gradient
              >
                <div className="flex justify-center mb-6">{approach.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {approach.description}
                </p>
              </BentoCard>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn from="bottom" delay={700}>
          <div className="mt-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t("title2")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t("description2")}
                </p>
                <ul className="space-y-3">
                  {[
                    "Industry-specific expertise and domain knowledge",
                    "Full-stack development capabilities across multiple technologies",
                    "User-centered design philosophy focused on exceptional experiences",
                    "Scalable architecture that grows with your business",
                    "Ongoing support and continuous improvement",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="min-w-4 min-h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg" />
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Team working together"
                    className="w-full h-full object-cover"
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
