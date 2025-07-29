import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.wrap}>
        <p>© {new Date().getFullYear()} Mini blog. All rights reserved.</p>
        <p>Developer: Vyacheslav Chopenko</p>
        <p>
          Contact us:
          <a href="mailto:chopenkovyacheslav@gmail.com">
            chopenkovyacheslav@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
