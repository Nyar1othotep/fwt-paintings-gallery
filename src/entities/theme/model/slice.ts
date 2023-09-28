import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TypeTheme } from "./types";

const initialState = {
  theme: window.matchMedia(`(prefers-color-scheme: light)`) ? "light" : "dark",
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

export const { changeTheme } = themeSlice.actions;
export const { reducer } = themeSlice;
