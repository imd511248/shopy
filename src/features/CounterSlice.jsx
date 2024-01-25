import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProduct = createAsyncThunk("counter/fetchProduct", async () => {
  try {
    const res = await axios.get(`https://dummyjson.com/products`);
    return res.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action?.payload.products;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchProduct };

export default counterSlice.reducer;
