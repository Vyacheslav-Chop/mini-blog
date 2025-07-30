import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerWrap}>
        <p className={css.text}>© {new Date().getFullYear()} Mini blog. All rights reserved.</p>
        <p className={css.text}>Developer: Vyacheslav Chopenko</p>
        <p className={css.text}>
          Contact us:
          <a className={css.mailLink} href="mailto:chopenkovyacheslav@gmail.com">
            chopenkovyacheslav@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
