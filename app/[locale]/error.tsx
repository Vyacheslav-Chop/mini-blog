"use client";
import { useTranslations } from "next-intl";
import css from "./error.module.css";

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  const t = useTranslations("Error");

  return (
    <p className={css.text}>{t("errorPosts", { message: error.message })}</p>
  );
}
