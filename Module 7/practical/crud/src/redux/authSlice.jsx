import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "authentication",
  initialState: {
    users: "",
  },
  reducers: {
    login: (state, action) => {
      state.users = action.payload;
    },
    logout: (state) => {
      state.users = "";
    },
  },
});

export const { login, logout } = authReducer.actions;
export default authReducer.reducer;
