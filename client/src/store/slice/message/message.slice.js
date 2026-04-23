import { createSlice } from "@reduxjs/toolkit";
import { sendMessageThunk, getMessageThunk } from "./message.thunk";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    buttonLoading: false,
    screenLoading: false,
    messages: [],
  },
  reducers: {
    pushNewMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // send message
    builder
      .addCase(sendMessageThunk.pending, (state, action) => {
        state.buttonLoading = true;
      })
      .addCase(sendMessageThunk.fulfilled, (state, action) => {
        state.messages.push(action.payload?.responseData);
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
        state.messages = action.payload?.responseData?.messages || [];
        state.screenLoading = false;
      })
      .addCase(getMessageThunk.rejected, (state, action) => {
        state.buttonLoading = false;
      });
  },
});

export const { pushNewMessage } = messageSlice.actions;

export default messageSlice.reducer;
