import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartItems = {
  items: CartItem[];
};

const initialState: CartItems = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        price: number;
        quantity: number;
      }>
    ) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increment: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemIndex].quantity += 1;
    },
    decrement: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemIndex].quantity > 0
        ? (state.items[itemIndex].quantity -= 1)
        : (state.items[itemIndex].quantity = 0);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
