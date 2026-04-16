import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserThunk = createAsyncThunk("user/login", async () => {
  console.log("hello");
});
