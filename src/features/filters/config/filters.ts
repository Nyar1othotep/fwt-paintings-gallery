// Shared
import { Input, Range } from "@/shared/ui";

import { AuthorSelect } from "../ui/AuthorSelect/AuthorSelect";
import { LocationSelect } from "../ui/LocationSelect/LocationSelect";
import { TFilters } from "../model/types";

export const filters: TFilters[] = [
  {
    name: "q",
    component: "Input",
    placeholder: "Name",
  },
  {
    name: "authorId",
    component: "AuthorSelect",
    initValue: "Author",
  },
  {
    name: "locationId",
    component: "LocationSelect",
    initValue: "Location",
  },
  {
    name: "created",
    component: "Range",
    initValue: "Created",
    subFilters: [
      {
        name: "created_gte",
        component: "Input",
        placeholder: "from",
      },
      {
        name: "created_lte",
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
