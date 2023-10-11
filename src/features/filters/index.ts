export { Filters } from "./ui/Filters/Filters";
export {
  setFilters,
  resetFilters,
  selectFilters,
  reducer as FiltersReducer,
} from "./model/slice";
export { useGetAuthorsQuery, useGetLocationsQuery } from "./api/filtersApi";
