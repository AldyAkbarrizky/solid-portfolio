"use client";

import { useMemo, useState } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCategory = {
  id: string;
  label: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  categories: string[];
  link: string;
};

type ProjectFilterGridProps = {
  categories: ProjectCategory[];
  projects: Project[];
  viewLabel: string;
  viewAllLabel: string;
};

export default function ProjectFilterGrid({
  categories,
  projects,
  viewLabel,
  viewAllLabel,
}: ProjectFilterGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(activeCategory)
    );
  }, [activeCategory, projects]);

  return (
    <>
      <AnimateIn from="bottom" delay={200}>
        <div className="mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center rounded-full border border-border/70 bg-card/70 p-1 shadow-sm backdrop-blur">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  : "rounded-full text-muted-foreground hover:text-foreground"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <AnimateIn key={project.id} from="bottom" delay={100 * (index + 1)}>
            <BentoCard className="group h-full" gradient>
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Project {String(project.id).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-tight">
                    {project.title}
                  </h3>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 shrink-0 rounded-full bg-background/50"
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${viewLabel}: ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-border/60 bg-background/60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <p className="min-h-24 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </BentoCard>
          </AnimateIn>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          type="button"
          variant="outline"
          className="flex items-center gap-2 rounded-full bg-card/70"
          onClick={() => setActiveCategory("all")}
        >
          {viewAllLabel} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
