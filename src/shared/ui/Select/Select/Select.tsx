import { useState, MouseEvent, TouchEvent } from "react";

import { Dropdown } from "../../Dropdown/Dropdown";
import { OptionsList } from "../OptionsList/OptionsList";
import { ReactComponent as Icon } from "../../../assets/x.svg";
import styles from "./Select.module.scss";

type TOption = {
  id: number;
  name: string;
};

interface ISelect {
  initValue?: string;
  status?: boolean;
  options: any;
  onChange: (option: number | null) => void;
}

export function Select({
  initValue,
  status = true,
  options,
  onChange,
}: ISelect) {
  const [value, setValue] = useState("");
  const [isDropdownClose, setIsDropdownClose] = useState(false);

  const closeDropdown = () => {
    setIsDropdownClose(true);
  };

  const handleOption = (option: TOption) => {
    setValue(option.name);
    onChange(option.id);
    closeDropdown();
  };

  const handleAction = (e: MouseEvent | TouchEvent) => {
    e.stopPropagation();
    setValue(initValue || "");
    onChange(null);
  };

  return (
    <Dropdown
      initValue={initValue}
      forceValue={value}
      forceClose={isDropdownClose}
      actionSlot={
        <div className={styles.icon} onClick={handleAction} aria-hidden="true">
          <Icon />
        </div>
      }
      contentSlot={
        status && <OptionsList options={options} onChange={handleOption} />
      }
    />
  );
}
