import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: cartSlice,
  },
});
