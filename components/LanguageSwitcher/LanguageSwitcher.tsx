"use client";

import { useState } from "react";
import css from "./LanguageSwitcher.module.css";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("Header");

  const switchLanguage = (newLang: string) => {
    if (newLang !== locale) {
      router.replace(pathname, { locale: newLang });
      router.refresh();
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className={css.langWrap}>
      <button className={css.chooseBtn} onClick={toggle}>
        {t("languageSwitcher.choose")}
      </button>
      {isOpen && (
        <ul className={css.langList}>
          <li className={css.langItem}>
            <button
              className={css.langBtn}
              onClick={() => switchLanguage("en")}
            >
              {t("languageSwitcher.en")}
            </button>
          </li>
          <li className={css.langItem}>
            <button
              className={css.langBtn}
              onClick={() => switchLanguage("uk")}
            >
              {t("languageSwitcher.uk")}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
