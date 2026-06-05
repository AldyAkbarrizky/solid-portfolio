import { AnimateIn } from "@/components/ui/animate-in";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import SolidSVG from "@/assets/images/Solid SVG.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  const quickLinks = [
    { href: "/", label: t("home") },
    { href: "#projects", label: t("projects") },
    { href: "#team", label: t("team") },
    { href: "#process", label: t("process") },
    { href: "#approach", label: t("approach") },
    {
      href: "mailto:ptsolidsejatheraselamanya@gmail.com",
      label: t("contact"),
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/90">
      <div className="grain-overlay absolute inset-0 opacity-20" />
      <div className="container px-4 mx-auto">
        <div className="relative grid grid-cols-1 gap-8 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <AnimateIn from="bottom" delay={100}>
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image src={SolidSVG} alt="Solid Logo" width={28} height={28} />
                <span className="font-bold text-xl">{t("title")}</span>
              </Link>
              <p className="mb-5 max-w-sm leading-7 text-muted-foreground">
                {t("description")}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/solidtechno.id/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Solid Techno ID Instagram"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiInstagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@solidtechno"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Solid Techno ID TikTok"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiTiktok className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn from="bottom" delay={200}>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {t("quicklink")}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn from="bottom" delay={300}>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {t("contact")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground w-full">
                    Jl. Kebon Kopi, blok Citopeng No 312 RT 06 RW 22, Kota
                    Cimahi
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground w-full">
                    +62 851-5623-0293
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground w-full truncate">
                    ptsolidsejatheraselamanya@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground w-full truncate">
                    aldyakbarrizky18@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn from="bottom" delay={400}>
            <div>
              <h3 className="mb-4 font-display text-2xl font-semibold">
                {t("subscribe")}
              </h3>
              <p className="text-muted-foreground mb-4">{t("subscribedesc")}</p>
              <Button
                asChild
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="mailto:ptsolidsejatheraselamanya@gmail.com">
                  {t("contact")}
                </Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-border py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Solid Techno ID. {t("allrightsreserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
