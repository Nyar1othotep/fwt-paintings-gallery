import { type ReactNode } from "react";

import { Dropdown } from "../Dropdown/Dropdown";
import styles from "./Range.module.scss";

interface IRange {
  initValue?: string;
  contentSlot?: ReactNode;
}

export function Range({ initValue, contentSlot }: IRange) {
  return (
    <Dropdown
      initValue={initValue}
      contentSlot={
        <div className={styles.root}>
          <hr />
          {contentSlot}
        </div>
      }
    />
  );
}
