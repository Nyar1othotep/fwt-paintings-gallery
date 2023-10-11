// Shared
import { Select } from "@/shared/ui";

import { useGetAuthorsQuery } from "../../api/filtersApi";

interface ISelect {
  initValue?: string;
  onChange: (option: number | null) => void;
}

export function AuthorSelect({ initValue, onChange }: ISelect) {
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
