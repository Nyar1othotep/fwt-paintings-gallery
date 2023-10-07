import SimpleBar from "simplebar-react";

import "./SimpleBar.scss";
import styles from "./OptionsList.module.scss";

type TOption = {
  id: number;
  name: string;
};

interface IOptionsList {
  options: TOption[];
  onChange: (option: TOption) => void;
}

export function OptionsList({ options, onChange }: IOptionsList) {
  return (
    <SimpleBar className={styles.root}>
      <ul className={styles.options}>
        {options.map((option) => (
          <li
            key={option.id}
            className={styles.option}
            onClick={() => onChange(option)}
            aria-hidden="true"
          >
            <h2 className="text-collapse">{option.name}</h2>
          </li>
        ))}
      </ul>
    </SimpleBar>
  );
}
