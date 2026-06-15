import Bozz from "@/assets/images/Afdal Square.webp";
import Dyxon from "@/assets/images/Aldy Akbarrizky.webp";
import Jekzz from "@/assets/images/Jek Square.webp";
import Habibz from "@/assets/images/Naufal Tamvan.webp";
import { AnimateIn } from "@/components/ui/animate-in";
import BentoCard from "@/components/BentoCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness } from "lucide-react";
import { useTranslations } from "next-intl";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const team = [
  {
    id: "afdal",
    image: Bozz,
    social: {
      instagram: "",
      linkedin: "",
      github: "",
    },
  },
  {
    id: "aldy",
    image: Dyxon,
    social: {
      instagram: "",
      linkedin: "",
      github: "",
    },
  },
  {
    id: "andrian",
    image: Jekzz,
    social: {
      instagram: "",
      linkedin: "",
      github: "",
    },
  },
  {
    id: "naufal",
    image: Habibz,
    social: {
      instagram: "https://www.instagram.com/naufal2607/",
      linkedin: "https://www.linkedin.com/in/naufal-habib-159678248/",
      github: "https://github.com/Fall2607",
    },
  },
];

const Team = () => {
  const t = useTranslations("Team");
  const t2 = useTranslations("TeamMembers");
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-secondary/45 py-24"
    >
      <div className="grain-overlay absolute inset-0 opacity-25" />
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
        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => {
            const memberName = t2(`${member.id}.name`);
            const socialLinks = [
              {
                label: "Instagram",
                href: member.social.instagram,
                icon: SiInstagram,
              },
              {
                label: "LinkedIn",
                href: member.social.linkedin,
                icon: BriefcaseBusiness,
              },
              { label: "GitHub", href: member.social.github, icon: SiGithub },
            ].filter((item) => item.href);

            return (
              <AnimateIn key={member.id} from="bottom" delay={index * 100}>
                <BentoCard className="group h-full" gradient={index % 2 === 0}>
                  <div className="relative mb-5 overflow-hidden rounded-2xl border border-border/60 aspect-[4/5] bg-background/50">
                    <Image
                      src={member.image}
                      alt={memberName}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      placeholder="blur"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    {socialLinks.length > 0 && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex justify-center gap-2">
                            {socialLinks.map((socialLink) => {
                              const SocialIcon = socialLink.icon;

                              return (
                                <Button
                                  key={socialLink.label}
                                  asChild
                                  variant="ghost"
                                  size="icon"
                                  className="bg-background/20 hover:bg-background/40 backdrop-blur-sm"
                                >
                                  <Link
                                    href={socialLink.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${memberName} ${socialLink.label}`}
                                  >
                                    <SocialIcon className="h-4 w-4" />
                                  </Link>
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t2(`${member.id}.role`)}
                  </p>
                  <h3 className="min-h-14 font-display text-2xl font-semibold leading-none">
                    {memberName}
                  </h3>
                  <p className="mt-4 min-h-20 text-sm leading-6 text-muted-foreground">
                    {t2(`${member.id}.bio`)}
                  </p>
                </BentoCard>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
