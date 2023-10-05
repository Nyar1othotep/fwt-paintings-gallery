// Entities
import { useGetLocationsQuery } from "entities/filters";

// Shared
import { Select } from "shared/ui";

import type { TSelect } from "../../model/types";

export function LocationSelect({ initValue, onChange }: TSelect) {
  const { data: locations, isSuccess } = useGetLocationsQuery({});

  return (
    <Select
      initValue={initValue}
      status={isSuccess}
      options={locations}
      onChange={onChange}
    />
  );
}
