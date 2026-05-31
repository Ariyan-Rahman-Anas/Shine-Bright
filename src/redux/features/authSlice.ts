import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
  countryCode: string | undefined;
  role: string;
  emailVerified: boolean;
  isActive: boolean;
  image: string | undefined;
}

export interface AuthState {
  user: AuthUser | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

// selectors
export const loggedInUser = (state: RootState) => state.auth.user;