// ..................
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addData: (state, action) => {
      const index = state.products.findIndex((item) => item.id === action.payload.details.id);
      if (index === -1) {
        state.products.push({ ...action.payload.details, count: 1 });
      } else {
        state.products[index].count += 1;
      }
    },
    increment: (state, action) => {
      const index = state.products.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.products[index].count += 1;
      }
    },
    decrement: (state, action) => {
      const index = state.products.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state.products[index].count > 1) {
          state.products[index].count -= 1;
        } else {
          state.products.splice(index, 1);
        }
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addData, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
