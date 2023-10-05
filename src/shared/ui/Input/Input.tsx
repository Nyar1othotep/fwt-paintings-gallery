import { ChangeEvent, FocusEvent, KeyboardEvent, useState } from "react";
import cn from "classnames";

import styles from "./Input.module.scss";

interface IInput {
  initValue?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function Input({ initValue, placeholder, onChange }: IInput) {
  const [value, setValue] = useState(initValue || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onChange(value);
    }
  };

  return (
    <input
      className={cn(styles.root, "placeholder")}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onKeyDown={handleKey}
      onBlur={handleBlur}
    />
  );
}
