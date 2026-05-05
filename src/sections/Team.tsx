import Bozz from "@/assets/images/Afdal Square.webp";
import Dyxon from "@/assets/images/Aldy Square.webp";
import Jekzz from "@/assets/images/Jek Square.webp";
import Habibz from "@/assets/images/Naufal Anak Baik.webp";
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
    <section id="team" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <AnimateIn from="bottom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("description")}</p>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <BentoCard className="group h-full">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                    <Image
                      src={member.image}
                      alt={memberName}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      placeholder="blur"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {socialLinks.length > 0 && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <h3 className="min-h-12 text-lg font-semibold mb-1">
                    {memberName}
                  </h3>
                  <p className="text-sm text-primary mb-2">
                    {t2(`${member.id}.role`)}
                  </p>
                  <p className="min-h-16 text-sm text-muted-foreground">
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
