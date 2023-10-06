export type TSelect = {
  initValue?: string;
  onChange: (option: number | string) => void;
};

export type TFilters = {
  name: string;
  component: "Input" | "AuthorSelect" | "LocationSelect" | "Range";
  placeholder?: string;
  initValue?: string;
  subFilters?: TFilters[];
};
