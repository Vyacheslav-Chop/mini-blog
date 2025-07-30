import React from "react";
import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";


const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerWrap}>
        <Navigation />
        <LanguageSwitcher/>
      </div>
    </header>
  );
};

export default Header;
