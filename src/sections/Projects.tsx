import { AnimateIn } from "@/components/ui/animate-in";
import ProjectFilterGrid from "@/components/ProjectFilterGrid";
import { useTranslations } from "next-intl";
import Room from "@/assets/images/Argo Room.webp";
import AI from "@/assets/images/Argo AI.webp";
import CV from "@/assets/images/CV-Solid.png";

const projects = [
  {
    id: 1,
    label: "room",
    image: Room,
    tags: ["React", "Node.js", "NextJS", "Meeting"],
    categories: ["meeting"],
    link: "https://room.solidtechno.com",
  },
  {
    id: 2,
    label: "ai",
    image: AI,
    tags: ["React", "Node.js", "NextJS", "AI"],
    categories: ["ai"],
    link: "https://ai.solidtechno.com",
  },
  {
    id: 3,
    label: "cv",
    image: CV,
    tags: ["React", "Node.js", "NextJS", "Review"],
    categories: ["review"],
    link: "https://cv-review.solidtechno.com",
  },
];

const Projects = () => {
  const t = useTranslations("Projects");
  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "ai", label: t("categories.ai") },
    { id: "meeting", label: t("categories.meeting") },
    { id: "review", label: t("categories.review") },
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
