import { useEffect, type ReactNode } from "react";

// Shared
import { useAppSelector } from "@/shared/lib";

import { selectTheme } from "../model/slice";

interface IChildren {
  children: ReactNode;
}

export function ThemeProvider({ children }: IChildren) {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return children;
}
