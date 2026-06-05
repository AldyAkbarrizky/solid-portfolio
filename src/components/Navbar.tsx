"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import Link from "next/link";
import Image from "next/image";
import SolidSVG from "@/assets/images/Solid SVG.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 10;
      setIsScrolled((currentIsScrolled) =>
        currentIsScrolled === nextIsScrolled
          ? currentIsScrolled
          : nextIsScrolled
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "#projects", label: t("projects") },
    { href: "#team", label: t("team") },
    { href: "#process", label: t("process") },
    { href: "#approach", label: t("approach") },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/78 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image src={SolidSVG} alt="Solid Logo" width={28} height={28} />
          <span className="truncate text-lg font-bold sm:text-xl">
            {t("brandName")}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            variant="default"
            size="sm"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="mailto:ptsolidsejatheraselamanya@gmail.com">
              {t("contactUs")}
            </Link>
          </Button>
          <ModeToggle />
          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:hidden">
          <ModeToggle />
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 pt-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 p-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xl font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            variant="default"
            className="w-full mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              toggleMenu();
            }}
          >
            <Link href="mailto:ptsolidsejatheraselamanya@gmail.com">
              {t("contactUs")}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
