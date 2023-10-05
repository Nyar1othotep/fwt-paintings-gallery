import { combineReducers } from "redux";

// Entities
import { ThemeReducer } from "entities/theme";
import { FiltersReducer } from "entities/filters";

// Shared
import { baseApi } from "shared/api";

export const rootReducers = combineReducers({
  theme: ThemeReducer,
  filters: FiltersReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
