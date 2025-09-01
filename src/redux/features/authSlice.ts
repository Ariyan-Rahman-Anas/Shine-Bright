import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    countryCode: string;
    phone: string;
  } | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

// selectors
export const loggedInUser = (state: RootState) => state.auth.user;