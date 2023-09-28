import { combineReducers } from "redux";

// Shared
import { baseApi } from "shared/api";

export const rootReducers = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
