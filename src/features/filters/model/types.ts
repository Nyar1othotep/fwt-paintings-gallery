export type TDto = {
  id: number;
  name: string;
};

export type TLocation = {
  id: number;
  location: string;
};

export type TFilters = {
  name: string;
  component: "Input" | "AuthorSelect" | "LocationSelect" | "Range";
  placeholder?: string;
  initValue?: string;
  subFilters?: TFilters[];
};
