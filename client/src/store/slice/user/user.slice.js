import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: () => {
      console.log("hello login");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        console.log("fulfilled");
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});

export default userSlice.reducer;
