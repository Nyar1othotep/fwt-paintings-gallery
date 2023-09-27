import { combineReducers } from "redux";
import { baseApi } from "shared/api";

export const rootReducers = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
