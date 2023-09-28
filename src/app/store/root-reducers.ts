import { combineReducers } from "redux";

// Entities
import { ThemeReducer } from "entities/theme";

// Shared
import { baseApi } from "shared/api";

export const rootReducers = combineReducers({
  theme: ThemeReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
