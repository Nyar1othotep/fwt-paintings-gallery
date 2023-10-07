// Entities
import { useGetAuthorsQuery } from "entities/filters";

// Shared
import { Select } from "shared/ui";

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
