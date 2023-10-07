// Entities
import { useGetPaintingsQuery, transformResponse } from "entities/paintings";
import {
  selectFilters,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} from "entities/filters";

// Features
import { ToggleTheme } from "features/theme";

import { useAppSelector } from "shared/lib";

import styles from "./HeaderLayout.module.scss";

export function HeaderLayout() {
  const filters = useAppSelector(selectFilters);
  const { data: paintings, isSuccess: isPSuccess } =
    useGetPaintingsQuery(filters);
  const { data: authors, isSuccess: isASuccess } = useGetAuthorsQuery({});
  const { data: locations, isSuccess: isLSuccess } = useGetLocationsQuery({});

  if (isPSuccess && isASuccess && isLSuccess) {
    console.log(transformResponse({ paintings, authors, locations }));
  }

  return (
    <header className={styles.root}>
      <a href="https://framework.team/">
        <img
          className={styles.logo}
          src="/fwt-paintings-gallery/images/logo.png"
          alt="Logo FWT-Framework team"
        />
      </a>
      <ToggleTheme className={styles.theme} />
    </header>
  );
}
