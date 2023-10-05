import { useState } from "react";

import { Dropdown } from "../../Dropdown/Dropdown";
import { OptionsList } from "../OptionsList/OptionsList";

type TOption = {
  id: number;
  name?: string;
  location?: string;
};

interface ISelect {
  initValue?: string;
  status?: boolean;
  options: TOption[];
  onChange: (option: number) => void;
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
    setValue(option.name || option.location!);
    onChange(option.id);
    closeDropdown();
  };

  return (
    <Dropdown
      initValue={initValue}
      forceValue={value}
      forceClose={isDropdownClose}
      contentSlot={
        status && <OptionsList options={options} onChange={handleOption} />
      }
    />
  );
}
