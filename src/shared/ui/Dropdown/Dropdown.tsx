import { useRef, useState, useEffect, type ReactNode } from "react";
import cn from "classnames";

import { useOutsideClick } from "../../lib";
import { ReactComponent as Icon } from "../../assets/arrow.svg";
import styles from "./Dropdown.module.scss";

interface IDropdown {
  initValue?: string;
  forceValue?: string;
  forceClose?: boolean;
  contentSlot?: ReactNode;
}

export function Dropdown({
  initValue,
  forceValue,
  forceClose,
  contentSlot,
}: IDropdown) {
  const [value, setValue] = useState(initValue || "");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceValue) {
      setValue(forceValue);
    }
    if (forceClose) {
      setIsOpen(false);
    }
  }, [forceValue, forceClose]);

  const handleClose = () => setIsOpen(false);

  useOutsideClick(ref, handleClose);

  return (
    <div ref={ref} className={styles.root}>
      <div
        className={cn(styles.dropdown, { [styles.active]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
        aria-hidden="true"
      >
        <div className={cn(styles.title, "placeholder text-collapse")}>
          {value}
        </div>
        <div className={cn(styles.icon, { [styles.active]: isOpen })}>
          <Icon />
        </div>
      </div>
      <div className={cn(styles.content, { [styles.active]: isOpen })}>
        {contentSlot && contentSlot}
      </div>
    </div>
  );
}
