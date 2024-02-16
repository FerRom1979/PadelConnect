import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userId: string | null;
  token: string | null;
  status: "idle" | "loading" | "failed" | null;
}

const initialState: AuthState = {
  userId: null,
  token: null,
  status: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.status = "loading";
    },
    loginSuccess: (
      state,
      action: PayloadAction<{
        userId: string;
        token: string;
      }>,
    ) => {
      state.status = "idle";
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    loginFailure: (state) => {
      state.status = "failed";
      state.userId = null;
      state.token = null;
    },
    logout: (state) => {
      state.userId = null;
      state.token = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
