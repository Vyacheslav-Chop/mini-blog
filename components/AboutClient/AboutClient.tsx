import { useTranslations } from "next-intl";
import css from "./AboutClient.module.css";

const AboutClient = () => {
  const t = useTranslations("About");
  return (
    <section className={css.section}>
      <div className={css.container}>
        <p className={css.text}>{t("paragraph1")}</p>
        <p className={css.text}>{t("paragraph2")}</p>
        <p className={css.text}>{t("paragraph3")}</p>
        <p className={css.text}>{t("paragraph4")}</p>
      </div>
    </section>
  );
};

export default AboutClient;
