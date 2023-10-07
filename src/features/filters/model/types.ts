export type TFilters = {
  name: string;
  component: "Input" | "AuthorSelect" | "LocationSelect" | "Range";
  placeholder?: string;
  initValue?: string;
  subFilters?: TFilters[];
};
