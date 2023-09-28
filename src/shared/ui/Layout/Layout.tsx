import { type ReactNode } from "react";
import styles from "./Layout.module.scss";

type Props = {
  headerSlot: ReactNode;
  contentSlot: ReactNode;
};

export function Layout(props: Props) {
  const { headerSlot, contentSlot } = props;
  return (
    <div className={styles.root}>
      {headerSlot}
      <div className={styles.container}>
        <div className={styles.content}>{contentSlot}</div>
      </div>
    </div>
  );
}
