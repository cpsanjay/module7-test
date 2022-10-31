import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addedItem: (state) => {
      state.cartTotalQuantity++;
    },
  },
});

export const { addedItem } = cartSlice.actions;

export default cartSlice.reducer;
