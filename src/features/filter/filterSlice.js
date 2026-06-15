import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
  maxPrice: 1000,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },

    resetFilters: (state) => {
      state.category = "All";
      state.maxPrice = 1000;
    },
  },
});

export const {
  setCategory,
  setMaxPrice,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
