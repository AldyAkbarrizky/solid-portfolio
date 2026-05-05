import { AnimateIn } from "@/components/ui/animate-in";
import ProjectFilterGrid from "@/components/ProjectFilterGrid";
import { useTranslations } from "next-intl";
import Room from "@/assets/images/Argo Room.webp";
import AI from "@/assets/images/Argo AI.webp";
import CV from "@/assets/images/CV-Solid.png";
import Girby from "@/assets/images/Girby Clothes.webp";

const projects = [
  {
    id: 1,
    label: "room",
    image: Room,
    tags: ["React", "Node.js", "NextJS", "Meeting"],
    categories: ["business"],
    link: "https://room.solidtechno.com",
  },
  {
    id: 2,
    label: "ai",
    image: AI,
    tags: ["React", "Node.js", "NextJS", "AI"],
    categories: ["ai", "consumer"],
    link: "https://ai.solidtechno.com",
  },
  {
    id: 3,
    label: "cv",
    image: CV,
    tags: ["React", "Node.js", "NextJS", "Review"],
    categories: ["ai", "business"],
    link: "https://cv-review.solidtechno.com",
  },
  {
    id: 4,
    label: "girby",
    image: Girby,
    tags: ["NextJS", "Node.js", "E-Commerce"],
    categories: ["consumer"],
    link: "https://girby-dev.solidtechno.com",
  },
];

const Projects = () => {
  const t = useTranslations("Projects");
  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "ai", label: t("categories.ai") },
    { id: "business", label: t("categories.business") },
    { id: "consumer", label: t("categories.consumer") },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <AnimateIn from="bottom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("description")}</p>
          </div>
        </AnimateIn>

        <ProjectFilterGrid
          categories={categories}
          projects={projects.map((project) => ({
            ...project,
            title: t(`projects.${project.label}.title`),
            description: t(`projects.${project.label}.description`),
          }))}
          viewLabel={t("view")}
          viewAllLabel={t("viewall")}
        />
      </div>
    </section>
  );
};

export default Projects;
