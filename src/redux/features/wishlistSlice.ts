import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";
import { RootState } from "../store";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [] as CartItem[]
    },
    reducers: {
        addToWishlist: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                // For wishlist, typically you don't want to add quantity, just keep the item
                // But if you want to update quantity, you can do:
                // existingItem.quantity += action.payload.quantity;
                return; // Item already exists, don't add duplicate
            } else {
                state.items.push(action.payload);
            }
        },
        
        // ✅ Fixed: Simplified to accept only CartItem for consistency
        removeFromWishlist: (state, action: PayloadAction<CartItem>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        
        // Alternative: If you want to accept just ID, use this instead:
        removeFromWishlistById: (state, action: PayloadAction<{ id: string }>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        
        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item && action.payload.quantity > 0) {
                item.quantity = action.payload.quantity;
            }
        },
        
        clearWishlist: (state) => {
            state.items = [];
        },
    },
});

export const { 
    addToWishlist, 
    removeFromWishlist, 
    removeFromWishlistById, 
    updateQuantity, 
    clearWishlist 
} = wishlistSlice.actions;

export default wishlistSlice.reducer;

export const wishlistItems = (state: RootState) => state.wishlist.items;
export const wishlistItemsCount = (state: RootState) => state.wishlist.items?.length;