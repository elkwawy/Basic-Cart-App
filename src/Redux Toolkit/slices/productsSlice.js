import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

export const ProductsSlice = createSlice({
  name: "prouductsSlice",
  initialState: [],
  reducers: {
    // addProduct: (state, action) => {
    //   state.unshift(action.payload);
    //   // return [...state, action.payload];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
