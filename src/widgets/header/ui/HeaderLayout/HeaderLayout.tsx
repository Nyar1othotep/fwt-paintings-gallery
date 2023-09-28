import styles from "./HeaderLayout.module.scss";

export function HeaderLayout() {
  return (
    <header className={styles.root}>
      <a href="/">Logo</a>
      Toggle theme
    </header>
  );
}
