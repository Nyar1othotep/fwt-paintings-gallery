import { useEffect } from "react";
import type { ReactNode } from "react";

// Shared
import { useAppSelector } from "shared/lib";

import { selectTheme } from "../model/slice";

type TypeChildren = {
  children: ReactNode;
};

export function ThemeProvider({ children }: TypeChildren) {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return children;
}
