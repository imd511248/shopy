import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  status: "idle",
  error: null,
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterDatas: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { filterDatas } = FilterSlice.actions;
export default FilterSlice.reducer;
