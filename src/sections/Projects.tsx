"use client";
import { useState } from "react";
import { AnimateIn } from "@/components/ui/animate-in";
import BentoCard from "@/components/BentoCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import Room from "@/assets/images/Argo Room.webp";
import AI from "@/assets/images/Argo AI.webp";
import CV from "@/assets/images/CV-Solid.png";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    label: "room",
    image: Room,
    tags: ["React", "Node.js", "NextJS", "Meeting"],
    link: "https://room.solidtechno.com",
    large: false,
  },
  {
    id: 2,
    label: "ai",
    image: AI,
    tags: ["React", "Node.js", "NextJS", "AI"],
    link: "https://ai.solidtechno.com",
    large: false,
  },
  {
    id: 3,
    label: "cv",
    image: CV,
    tags: ["React", "Node.js", "NextJS", "Review"],
    link: "https://cv-review.solidtechno.com",
    large: false,
  },
];

const categories = ["All", "AI", "Meeting", "Review"];

const Projects = () => {
  const t = useTranslations("Projects");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(activeCategory.toLowerCase())
          )
        );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <AnimateIn from="bottom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("description")}</p>
          </div>
        </AnimateIn>

        <AnimateIn from="bottom" delay={200}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimateIn
              key={project.id}
              from="bottom"
              delay={100 * (index + 1)}
              className={project.large ? "lg:col-span-2" : ""}
            >
              <BentoCard className="h-full group" gradient>
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <Image
                    src={project.image}
                    alt={project.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-background/30 backdrop-blur-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t(`projects.${project.label}.title`)}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t(`projects.${project.label}.description`)}
                </p>
                <Link href={project.link} target="_blank">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 hover:text-purple-500 hover:bg-purple-500/10 px-0 cursor-pointer"
                  >
                    {t("view")} <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </BentoCard>
            </AnimateIn>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="flex items-center gap-2">
            {t("viewall")} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
