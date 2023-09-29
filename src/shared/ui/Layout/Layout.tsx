import { type ReactNode } from "react";
import styles from "./Layout.module.scss";

/**
 * @remark
 *
 * Layout создан с замахом на будущий sideSlot
 * По задание его нет, но думаю это хорошая практика
 */

type Props = {
  headerSlot: ReactNode;
  contentSlot: ReactNode;
};

export function Layout({ headerSlot, contentSlot }: Props) {
  return (
    <div className={styles.root}>
      {headerSlot}
      <div className={styles.container}>
        <div className={styles.content}>{contentSlot}</div>
      </div>
    </div>
  );
}
