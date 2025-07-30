"use client";
import css from "./error.module.css";

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  return (
    <p className={css.text}>Could not fetch posts. {error.message}</p>
  );
}
