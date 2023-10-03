import cn from "classnames";
import SimpleBar from "simplebar-react";

import "./SimpleBar.scss";
import styles from "./OptionsList.module.scss";

type TOption = {
  id: number;
  name: string;
};

interface IOptionsList {
  options: TOption[];
  isOpen: boolean;
  onChange: (newValue: string) => void;
}

export function OptionsList({ options, isOpen, onChange }: IOptionsList) {
  return (
    <SimpleBar
      className={cn(styles.optionsContainer, { [styles.active]: isOpen })}
    >
      <ul className={styles.options}>
        {options.map((option) => (
          <li
            key={option.id}
            className={styles.option}
            onClick={() => onChange(option.name)}
            aria-hidden="true"
          >
            <h2 className="text-collapse">{option.name}</h2>
          </li>
        ))}
      </ul>
    </SimpleBar>
  );
}
