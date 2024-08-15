import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = action.payload.username;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("User", action.payload.username);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.username = null;
      localStorage.removeItem("token");
      localStorage.removeItem("User");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
