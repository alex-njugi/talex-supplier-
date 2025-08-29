// src/store/slices/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/entities";

interface State { products: Product[] }
const initialState: State = { products: [] };

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    }
  }
});
export const { setProducts } = slice.actions;
export default slice.reducer;
