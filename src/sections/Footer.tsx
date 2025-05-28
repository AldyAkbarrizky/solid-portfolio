import { AnimateIn } from "@/components/ui/animate-in";
import { Code2, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import {
  SiX,
  SiInstagram,
  SiGithub,
  SiFacebook,
} from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimateIn from="bottom" delay={100}>
            <div>
              <Link href="#" className="flex items-center gap-2 mb-4">
                <Code2 className="h-8 w-8 text-purple-500" />
                <span className="font-bold text-xl">{t("title")}</span>
              </Link>
              <p className="text-muted-foreground mb-4">{t("description")}</p>
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <SiX className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <SiInstagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <SiGithub className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <SiFacebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn from="bottom" delay={200}>
            <div>
              <h3 className="font-bold text-lg mb-4">{t("quicklink")}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#clients"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("clients")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experience"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("experience")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#approach"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("approach")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn from="bottom" delay={300}>
            <div>
              <h3 className="font-bold text-lg mb-4">{t("contact")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-500 mt-0.5" />
                  <span className="text-muted-foreground">
                    Jl. Kebon Kopi, blok Citopeng No 312 RT 06 RW 22, Kota
                    Cimahi
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-purple-500" />
                  <span className="text-muted-foreground">
                    +62 877-7872-1893
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-500" />
                  <span className="text-muted-foreground">
                    ptsolidsejatheraselamanya@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn from="bottom" delay={400}>
            <div>
              <h3 className="font-bold text-lg mb-4">{t("subscribe")}</h3>
              <p className="text-muted-foreground mb-4">{t("subscribedesc")}</p>
              <form className="space-y-3">
                <Input type="email" placeholder="Your email address" />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </AnimateIn>
        </div>
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SolidTechno ID. {t("allrightsreserved")}
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("privacypolicy")}
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("termsofservice")}
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("cookiepolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
