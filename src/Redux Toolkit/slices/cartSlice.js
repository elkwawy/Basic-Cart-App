import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const ProductClone = { ...action.payload, quantity: 1 };
        state.push(ProductClone);
      }
    },
    removeFromCart: (state, action) => {
      console.log(action.payload.quantity);
      if (action.payload.quantity > 1) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      } else {
        return state.filter((item) => item.id !== action.payload.id);
      }
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
