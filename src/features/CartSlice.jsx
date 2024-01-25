import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
  status: "idle",
  error: null,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addData: (state, action) => {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
  },
});

export const { addData } = CartSlice.actions;
export default CartSlice.reducer;
