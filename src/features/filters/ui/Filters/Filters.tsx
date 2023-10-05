// Entities
import { setFilters } from "entities/filters";

// Shared
import { useAppDispatch } from "shared/lib";

import { filters, filtersMapping } from "../../config/filters";
import { TFilters } from "../../model/types";
import styles from "./Filters.module.scss";

export function Filters() {
  const dispatch = useAppDispatch();

  const handleFilters = (filter: { [key: string]: string | number }) => {
    dispatch(setFilters(filter));
  };

  const renderFilters = (filterData: TFilters[]) => {
    return filterData.map(
      ({ component, name, initValue, placeholder, subFilters }) => {
        const Component = filtersMapping[component];

        if (!Component) return null;

        return (
          <Component
            key={name}
            initValue={initValue}
            placeholder={placeholder}
            contentSlot={subFilters && renderFilters(subFilters)}
            onChange={(value: string | number) =>
              handleFilters({ [name]: value })
            }
          />
        );
      },
    );
  };

  const elements = renderFilters(filters);

  return <div className={styles.root}>{elements}</div>;
}
