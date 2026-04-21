import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserThunk,
  signupUserThunk,
  logoutUserThunk,
  profileThunk,
  otherUsersThunk,
} from "./user.thunk";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    screenLoading: true,
    buttonLoading: false,
    userProfile: null,
    otherUsers: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    //login
    builder
      .addCase(loginUserThunk.pending, (state, action) => {
        state.buttonLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.userProfile = action.payload?.responseData?.user;
        state.isAuthenticated = true;
        state.buttonLoading = false;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.buttonLoading = false;
      });

    // signup
    builder
      .addCase(signupUserThunk.pending, (state, action) => {
        state.buttonLoading = true;
      })
      .addCase(signupUserThunk.fulfilled, (state, action) => {
        state.userProfile = action.payload?.responseData?.newUser;
        state.isAuthenticated = true;
        state.buttonLoading = false;
      })
      .addCase(signupUserThunk.rejected, (state, action) => {
        state.buttonLoading = false;
      });

    //logout
    builder
      .addCase(logoutUserThunk.pending, (state, action) => {
        state.buttonLoading = true;
      })
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
        state.userProfile = null;
        state.isAuthenticated = false;
        state.buttonLoading = false;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.buttonLoading = false;
      });

    //profile
    builder
      .addCase(profileThunk.pending, (state, action) => {
        state.screenLoading = true;
      })
      .addCase(profileThunk.fulfilled, (state, action) => {
        state.userProfile = action.payload?.responseData?.profile;
        state.isAuthenticated = true;
        state.screenLoading = false;
      })
      .addCase(profileThunk.rejected, (state, action) => {
        state.screenLoading = false;
      });

    // otherUsers
    builder
      .addCase(otherUsersThunk.pending, (state, action) => {
        state.screenLoading = true;
      })
      .addCase(otherUsersThunk.fulfilled, (state, action) => {
        state.otherUsers = action.payload?.responseData;
        state.screenLoading = false;
      })
      .addCase(otherUsersThunk.rejected, (state, action) => {
        state.screenLoading = false;
      });
  },
});

export default userSlice.reducer;
