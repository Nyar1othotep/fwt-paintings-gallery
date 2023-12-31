// Shared
import { Select } from "@/shared/ui";

import { useGetLocationsQuery } from "../../api/filtersApi";

interface ISelect {
  initValue?: string;
  onChange: (option: number | null) => void;
}

export function LocationSelect({ initValue, onChange }: ISelect) {
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
