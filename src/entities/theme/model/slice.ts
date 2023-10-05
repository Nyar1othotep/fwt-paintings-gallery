import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { TypeTheme } from "./types";

const initialState = {
  theme: window.matchMedia(`(prefers-color-scheme: dark)`).matches
    ? "light"
    : "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, actions: PayloadAction<TypeTheme>) {
      state.theme = actions.payload;
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.theme;
export const { changeTheme } = themeSlice.actions;
export const { reducer } = themeSlice;
