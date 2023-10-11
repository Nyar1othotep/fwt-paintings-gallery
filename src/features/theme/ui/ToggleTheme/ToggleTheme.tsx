import cn from "classnames";

// Shared
import { useAppDispatch, useAppSelector } from "shared/lib";

import { changeTheme, selectTheme } from "../../model/slice";
import { ReactComponent as Icon } from "./assets/theme.svg";
import styles from "./ToggleTheme.module.scss";

interface IToggleTheme {
  className: string;
}

export function ToggleTheme({ className }: IToggleTheme) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const handleClick = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <div className={cn(styles.root, className)}>
      <button
        className={styles.wrapper}
        onClick={handleClick}
        type="button"
        aria-label={`Switch between dark and light mode. Current mode: ${theme}`}
      >
        <Icon className={styles.svg} />
      </button>
    </div>
  );
}
