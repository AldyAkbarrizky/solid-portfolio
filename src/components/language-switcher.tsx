"use client";
// Crucial: use navigation utilities from next-intl
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";

const LanguageSwitcher = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {routing.locales.map((lang) => (
        <Link
          key={lang}
          href={pathname}
          locale={lang}
          className={`px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors duration-150 ease-in-out
            ${
              currentLocale === lang
                ? "bg-primary/20 text-primary cursor-default"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }
          `}
          aria-disabled={currentLocale === lang}
          tabIndex={currentLocale === lang ? -1 : undefined}
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
