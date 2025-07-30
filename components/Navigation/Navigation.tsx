"use client";

import Link from "next/link";
import css from "./Navigation.module.css";
import { useTranslations } from "next-intl";

const Navigation = () => {
  const t = useTranslations("Header");
  return (
    <nav aria-label="Main navigation" className={css.nav}>
      <Link href="/">
        <svg width={140} height={50}>
          <use href="/logo.svg"></use>
        </svg>
      </Link>
      <ul className={css.navList}>
        <li className={css.navIten}>
          <Link className={css.navLink} href="/">
            {t("nav.home")}
          </Link>
        </li>
        <li className={css.navIten}>
          <Link className={css.navLink} href="/about">
            {t("nav.about")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
