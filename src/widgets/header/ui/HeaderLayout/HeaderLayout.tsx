import React from "react";
import { useDispatch } from "react-redux";

// Entities
import { changeTheme, selectTheme } from "entities/theme";

// Shared
import { useAppSelector } from "shared/lib";

import styles from "./HeaderLayout.module.scss";

export function HeaderLayout() {
  const dispatch = useDispatch();
  const theme = useAppSelector(selectTheme);

  const handleClick = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <header className={styles.root}>
      <a href="/">
        <img
          className={styles.logo}
          src="/fwt-paintings-gallery/images/logo.png"
          alt="Logo FWT-Framework team"
        />
      </a>
      <button type="button" onClick={handleClick}>
        Toggle theme
      </button>
    </header>
  );
}
