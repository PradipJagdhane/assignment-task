import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      console.log("from login slice",state);

    },

    logout: (state) => {
      state.isAuthenticated = false;
      console.log("logged out state", state);
    }
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
