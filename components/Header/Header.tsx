import Link from "next/link";
import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav aria-label="Main navigation">
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
    </header>
  );
};

export default Header;
