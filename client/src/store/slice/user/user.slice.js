import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, signupUserThunk, logoutUserThunk } from "./user.thunk";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    screenLoading: false,
    userProfile: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    //login
    builder
      .addCase(loginUserThunk.pending, (state, action) => {
        state.screenLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.userProfile = action.payload?.responseData?.user;
        state.isAuthenticated = true;
        state.screenLoading = false;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.screenLoading = false;
        state.isAuthenticated = false;
      });

    // signup
    builder
      .addCase(signupUserThunk.pending, (state, action) => {
        state.screenLoading = true;
      })
      .addCase(signupUserThunk.fulfilled, (state, action) => {
        state.userProfile = action.payload?.responseData?.newUser;
        state.isAuthenticated = true;
        state.screenLoading = false;
      })
      .addCase(signupUserThunk.rejected, (state, action) => {
        state.screenLoading = false;
        state.isAuthenticated = false;
      });

    //logout
    builder
      .addCase(logoutUserThunk.pending, (state, action) => {
        state.screenLoading = true;
      })
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
        state.userProfile = null;
        state.isAuthenticated = false;
        state.screenLoading = false;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.screenLoading = false;
      });
  },
});

export default userSlice.reducer;
