import { combineReducers } from "redux";

// Features
import { ThemeReducer } from "@/features/theme";
import { FiltersReducer } from "@/features/filters";

// Shared
import { baseApi } from "@/shared/api";

export const rootReducers = combineReducers({
  theme: ThemeReducer,
  filters: FiltersReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
