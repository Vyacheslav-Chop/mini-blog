import { useTranslations } from "next-intl";
import css from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();
  return (
    <footer className={css.footer}>
      <div className={css.footerWrap}>
        <p className={css.text}>{t("copyright", { year })}</p>
        <p className={css.text}>{t("developer")}</p>
        <p className={css.text}>
          {t("contact")}
          <a
            className={css.mailLink}
            href="mailto:chopenkovyacheslav@gmail.com"
          >
            chopenkovyacheslav@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
