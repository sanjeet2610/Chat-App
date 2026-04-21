import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user/user.slice";
import message from "./slice/message/message.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    message,
  },
});
