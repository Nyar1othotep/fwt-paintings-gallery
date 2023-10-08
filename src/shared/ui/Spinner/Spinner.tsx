import cn from "classnames";

import styles from "./Spinner.module.scss";

interface ISpinner {
  className?: string;
  width?: number;
  height?: number;
}

export function Spinner({ className, width = 50, height = 50 }: ISpinner) {
  return (
    <div className={cn(styles.root, className)}>
      <div
        className={styles.spinner}
        style={{
          "--spinner-width": `${width}px`,
          "--spinner-height": `${height}px`,
        }}
      >
        <div className={styles.wrapper}>
          <div />
        </div>
      </div>
    </div>
  );
}
