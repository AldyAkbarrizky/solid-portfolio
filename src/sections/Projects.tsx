import { AnimateIn } from "@/components/ui/animate-in";
import ProjectFilterGrid from "@/components/ProjectFilterGrid";
import { useTranslations } from "next-intl";
import Room from "@/assets/images/Argo Room.webp";
import AI from "@/assets/images/Argo AI.webp";
import CV from "@/assets/images/Solid CV.png";
import Girby from "@/assets/images/Girby Clothes.webp";
import UMKM from "@/assets/images/Solid UMKM.webp";

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
    link: "https://cv.solidtechno.com",
  },
  {
    id: 4,
    label: "girby",
    image: Girby,
    tags: ["NextJS", "Node.js", "E-Commerce"],
    categories: ["consumer"],
    link: "https://girby-dev.solidtechno.com",
  },
  {
    id: 5,
    label: "umkm",
    image: UMKM,
    tags: ["NextJS", "Node.js", "Company Profile", "Admin"],
    categories: ["business", "consumer"],
    link: "https://umkm.solidtechno.com",
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
    <section
      id="projects"
      className="relative overflow-hidden bg-secondary/45 py-24"
    >
      <div className="grain-overlay absolute inset-0 opacity-35" />
      <div className="container px-4 mx-auto">
        <AnimateIn from="bottom">
          <div className="relative mx-auto mb-14 max-w-3xl text-center">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="mt-3 section-title">{t("title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t("description")}
            </p>
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
