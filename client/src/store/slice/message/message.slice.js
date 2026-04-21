import { createSlice } from "@reduxjs/toolkit";
import { sendMessageThunk, getMessageThunk } from "./message.thunk";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    buttonLoading: false,
    screenLoading: false,
    messages: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // send message
    builder
      .addCase(sendMessageThunk.pending, (state, action) => {
        state.buttonLoading = true;
      })
      .addCase(sendMessageThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        state.buttonLoading = false;
      })
      .addCase(sendMessageThunk.rejected, (state, action) => {
        state.buttonLoading = false;
      });

    // get messages
    builder
      .addCase(getMessageThunk.pending, (state, action) => {
        state.screenLoading = true;
      })
      .addCase(getMessageThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        state.screenLoading = false;
      })
      .addCase(getMessageThunk.rejected, (state, action) => {
        state.buttonLoading = false;
      });
  },
});

export default messageSlice.reducer;
