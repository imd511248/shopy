import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice";
import CartSlice from "../features/CartSlice";
import FilterSlice from "../features/FilterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartData: CartSlice,
    rangeData: FilterSlice,
  },
});
