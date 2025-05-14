import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    expiresAt: null,
  },

  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.expiresAt = action.payload.expiresAt;
    },
    logout: (state) => {
      state.token = null;
      state.expiresAt = null;
    },
  },
});

export const { loginSuccess, logout } = slice.actions;

export default slice.reducer;
