// Shared
import { Input, Range } from "shared/ui";

import { AuthorSelect } from "../ui/AuthorSelect/AuthorSelect";
import { LocationSelect } from "../ui/LocationSelect/LocationSelect";
import { TFilters } from "../model/types";

export const filters: TFilters[] = [
  {
    name: "name",
    component: "Input",
    placeholder: "Name",
  },
  {
    name: "author",
    component: "AuthorSelect",
    initValue: "Author",
  },
  {
    name: "location",
    component: "LocationSelect",
    initValue: "Location",
  },
  {
    name: "created",
    component: "Range",
    initValue: "Created",
    subFilters: [
      {
        name: "from",
        component: "Input",
        placeholder: "from",
      },
      {
        name: "before",
        component: "Input",
        placeholder: "before",
      },
    ],
  },
];

export const filtersMapping = {
  Input,
  AuthorSelect,
  LocationSelect,
  Range,
};
