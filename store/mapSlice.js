import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenLevel: null,
  enteredSecondPage: false,
  selectedCity: null,
  mapMode: "common", // 'common' | 'blue' | 'green' | 'orange'
  isLoading: true,

  // 大選中各縣市的詳細資料
  cityDetail: null,
};

const sizeSetting = {
  desktop: 1280,
  tablet: 768,
};
export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    resetScreenLevel: (state, action) => {
      const w = action.payload;
      if (w >= sizeSetting.desktop) {
        state.screenLevel = "xl";
      } else if (w >= sizeSetting.tablet) {
        state.screenLevel = "md";
      } else {
        state.screenLevel = "sm";
      }
    },
    toggleEnteredSecondPage: (state, action) => {
      state.enteredSecondPage = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setMapMode: (state, action) => {
      state.mapMode = action.payload;
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    backToFirstPage: (state) => {
      state.enteredSecondPage = false;
      state.selectedCity = null;
    },
    setCityDetail: (state, action) => {
      state.cityDetail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  resetScreenLevel,
  toggleEnteredSecondPage,
  setSelectedCity,
  setMapMode,
  toggleIsLoading,
  backToFirstPage,
  setCityDetail,
} = mapSlice.actions;

export default mapSlice.reducer;
