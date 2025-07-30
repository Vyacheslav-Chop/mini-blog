import React from "react";
import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerWrap}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
