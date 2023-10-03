import React, { useState } from "react";
import cn from "classnames";

import styles from "./Input.module.scss";

interface IInput {
  initValue?: string;
  placeholder?: string;
}

export function Input({ initValue, placeholder }: IInput) {
  const [value, setValue] = useState<string>(initValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className={cn(styles.root, "placeholder")}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
