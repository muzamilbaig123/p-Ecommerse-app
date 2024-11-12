import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light"
}



const globalData = createSlice({
  name: "Theme Toggle",
  initialState ,
  reducers: {
    themeColors: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { themeColors } = globalData.actions;

export default globalData.reducer;
