import Bozz from "@/assets/images/Afdal Square.jpg";
import Dyxon from "@/assets/images/Aldy Square.jpg";
import Jekzz from "@/assets/images/Jek Square.jpg";
import Habibz from "@/assets/images/Naufal Anak Baik.jpg";
import { AnimateIn } from "@/components/ui/animate-in";
import BentoCard from "@/components/BentoCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const team = [
  {
    id: "afdal",
    image: Bozz,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "aldy",
    image: Dyxon,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "andrian",
    image: Jekzz,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "naufal",
    image: Habibz,
    social: {
      twitter: "https://www.instagram.com/naufal2607/",
      linkedin: "https://www.linkedin.com/in/naufal-habib-159678248/",
      github: "https://github.com/Fall2607",
    },
  },
];

const Team = () => {
  const t = useTranslations("Team");
  const t2 = useTranslations("TeamMembers");
  return (
    <section id="team" className="py-20 bg-background">
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
          {team.map((member, index) => (
            <AnimateIn key={member.id} from="bottom" delay={index * 100}>
              <BentoCard className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={member.image}
                    alt={t2(`${member.id}.name`)}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center gap-2">
                      <Link href={member.social.twitter} target="_blank">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-background/20 hover:bg-background/40 backdrop-blur-sm cursor-pointer"
                        >
                          <SiInstagram className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={member.social.linkedin} target="_blank">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-background/20 hover:bg-background/40 backdrop-blur-sm cursor-pointer"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={member.social.github} target="_blank">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-background/20 hover:bg-background/40 backdrop-blur-sm cursor-pointer"
                        >
                          <SiGithub className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  {t2(`${member.id}.name`)}
                </h3>
                <p className="text-sm text-purple-500 mb-2">
                  {t2(`${member.id}.role`)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t2(`${member.id}.bio`)}
                </p>
              </BentoCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
