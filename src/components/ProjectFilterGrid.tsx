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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-gradient-to-r from-violet-600 to-cyan-600"
                  : ""
              }
            >
              {category.label}
            </Button>
          ))}
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <AnimateIn key={project.id} from="bottom" delay={100 * (index + 1)}>
            <BentoCard className="h-full group" gradient>
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <Button
                asChild
                variant="ghost"
                className="flex items-center gap-2 px-0 hover:bg-primary/10 hover:text-primary"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${viewLabel}: ${project.title}`}
                >
                  {viewLabel} <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </BentoCard>
          </AnimateIn>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          type="button"
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setActiveCategory("all")}
        >
          {viewAllLabel} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
