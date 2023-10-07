import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    _page: 1,
    _limit: 12,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: () => initialState,
  },
});

export const selectFilters = (state: RootState) => state.filters.filters;
export const { setFilters, resetFilters } = filtersSlice.actions;
export const { reducer } = filtersSlice;
