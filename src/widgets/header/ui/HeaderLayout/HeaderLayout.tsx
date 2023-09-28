import { useDispatch } from "react-redux";

// Entities
import { changeTheme, useTheme } from "entities/theme";

import styles from "./HeaderLayout.module.scss";

export function HeaderLayout() {
  const dispatch = useDispatch();
  const theme = useTheme();

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
