import { ReactNode, useEffect } from "react";
import { useTheme } from "../model/selectors";

type TypeChildren = {
  children: ReactNode;
};

export function ThemeProvider({ children }: TypeChildren) {
  const theme = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return children;
}
