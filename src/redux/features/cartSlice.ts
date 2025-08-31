import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
  id: string;
  title: string;
  quantity: number;
  image?: string;
  color?: string;
  size?: string;
  regular_price?: number;
  sales_price?: number;
  discount_price?: number;
  discount_type?: string;
  discount_value?: number;
  size_attribute_id?: string;
  color_attribute_id?: string;
  product_type?: "VARIABLE" | "SINGLE";
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // Reducers for managing the cart state:
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    removeFromCart: (
      state,
      action: PayloadAction<{ id: string; color?: string; size?: string }>
    ) => {
      state.items = state.items.filter(
        item =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
    },

    updateQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        color?: string;
        size?: string;
        delta: number;
      }>
    ) => {
      const item = state.items.find(
        i =>
          i.id === action.payload.id &&
          i.color === action.payload.color &&
          i.size === action.payload.size
      );

      if (item) {
        const newQuantity = item.quantity + action.payload.delta;

        if (newQuantity > 0) {
          item.quantity = newQuantity;
        } else {
          // Remove if quantity goes to 0 or less
          state.items = state.items.filter(
            i =>
              !(
                i.id === action.payload.id &&
                i.color === action.payload.color &&
                i.size === action.payload.size
              )
          );
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export type { CartItem, CartState };

// Properly typed selectors (import RootState from store)
export const cartItems = (state: RootState) => state.cart.items;
export const cartItemsCount = (state: RootState) => state.cart.items?.length;
export const cartTotal = (state: RootState) =>
  state.cart.items.reduce((total: number, item: CartItem) =>
    total + item.sales_price! * item.quantity!, 0);