import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  user: {
    id: string;
    email: string;
    phone: string;
    country_code: string;
    first_name: string;
    last_name: string;
    user_role: string;
    user_type: string;
    user_status: string;
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