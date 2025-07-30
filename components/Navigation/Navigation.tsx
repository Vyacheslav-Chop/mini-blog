import Link from "next/link";
import css from "./Navigation.module.css";

const Navigation = () => {
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
            Home
          </Link>
        </li>
        <li className={css.navIten}>
          <Link className={css.navLink} href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
