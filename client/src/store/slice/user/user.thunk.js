import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../../components/utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/login", {
        username,
        password,
      });
      toast.success("Login Successfull");
      return response.data;
    } catch (error) {
      const errorOutput = error?.response?.data?.errMessage;
      console.error(errorOutput);
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  },
);
