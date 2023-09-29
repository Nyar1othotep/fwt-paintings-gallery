import React from "react";

// Features
import { ToggleTheme } from "features/theme";

import styles from "./HeaderLayout.module.scss";

export function HeaderLayout() {
  return (
    <header className={styles.root}>
      <a href="https://framework.team/">
        <img
          className={styles.logo}
          src="/fwt-paintings-gallery/images/logo.png"
          alt="Logo FWT-Framework team"
        />
      </a>
      <ToggleTheme className={styles.theme} />
    </header>
  );
}
