import { useRef, useState } from "react";
import cn from "classnames";

import { useOutsideClick } from "../../../lib";
import { OptionsList } from "../OptionsList/OptionsList";
import { ReactComponent as Icon } from "../assets/arrow.svg";
import styles from "./Select.module.scss";

type TOption = {
  id: number;
  name: string;
};

interface ISelect {
  initValue?: string;
  options: TOption[];
  onChange: (newValue: string) => void;
}

export function Select({ initValue, onChange, options }: ISelect) {
  const [value, setValue] = useState(initValue || "");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleOpen = () => setIsOpen((prev) => !prev);

  useOutsideClick(ref, handleOpen);

  const handleOption = (newValue: string) => {
    setValue(newValue);
    handleOpen();
    onChange(newValue);
  };

  return (
    <div ref={isOpen ? ref : null} className={styles.root}>
      <div
        className={cn(styles.select, { [styles.active]: isOpen })}
        onClick={handleOpen}
        aria-hidden="true"
      >
        <div className={cn(styles.title, "placeholder text-collapse")}>
          {value}
        </div>
        <div className={cn(styles.icon, { [styles.active]: isOpen })}>
          <Icon />
        </div>
      </div>
      <OptionsList options={options} isOpen={isOpen} onChange={handleOption} />
    </div>
  );
}
