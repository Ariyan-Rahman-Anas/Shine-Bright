import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import categoryReducer from "./features/categorySlice";
import wishlistReducer from "./features/wishlistSlice";
import customerCreateReducer from "./features/customerCreateSlice";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { baseApi } from "./api/baseApi";

// Configure persistence for app state ONLY (exclude API cache)
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart", "category", "wishlist", "customerCreate"], // ✅ Only persist app state, NOT API cache
};

// Root reducer combining API and persisted reducers
const rootReducer = combineReducers({
  // ✅ API reducers (not persisted)
  [baseApi.reducerPath]: baseApi.reducer,
  // ✅ Individual persisted reducers
  auth: authReducer,
  category: categoryReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  customerCreate: customerCreateReducer,
});

// Apply persistence only to specific slices
const persistedRootReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ✅ Only ignore redux-persist actions, keep other checks
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      baseApi.middleware,
    ),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;