import { useSelector } from "react-redux";

/**
 * @remark
 *
 * Я мог сделать как в документации Redux:
 * https://react-redux.js.org/using-react-redux/usage-with-typescript
 *
 * Но по правилам Feature-Sliced Design нельзя взаимодествовать
 * с директорией app из shared
 *
 * Я не смог найти другого решения и просто указал тип string
 * для возвращаемого значения из useTheme
 */

type RootState = {
  theme: {
    theme: string;
  };
};

export const useTheme = () =>
  useSelector((state: RootState) => state.theme.theme);
