// Entities
import { useGetAuthorsQuery } from "entities/filters";

// Shared
import { Select } from "shared/ui";

import type { TSelect } from "../../model/types";

export function AuthorSelect({ initValue, onChange }: TSelect) {
  const { data: authors, isSuccess } = useGetAuthorsQuery({});

  return (
    <Select
      initValue={initValue}
      status={isSuccess}
      options={authors}
      onChange={onChange}
    />
  );
}
