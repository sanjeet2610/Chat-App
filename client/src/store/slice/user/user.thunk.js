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

export const signupUserThunk = createAsyncThunk(
  "user/signup",
  async ({ username, fullName, gender, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/register", {
        username,
        fullName,
        gender,
        password,
      });
      toast.success("Registered Successfully");
      return response.data;
    } catch (error) {
      const errorOutput = error?.response?.data?.errMessage;
      console.error(errorOutput);
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  },
);

export const logoutUserThunk = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/logout");
      toast.success("Logout Successfully");
      return response.data;
    } catch (error) {
      const errorOutput = error?.response?.data?.errMessage;
      console.error(errorOutput);
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  },
);

export const profileThunk = createAsyncThunk(
  "user/profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/profile");
      return response.data;
    } catch (error) {
      const errorOutput = error?.response?.data?.errMessage;
      console.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  },
);

export const otherUsersThunk = createAsyncThunk(
  "user/otherUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("user/otherUsers");
      return response.data;
    } catch (error) {
      const errorOutput = error?.response?.data?.errMessage;
      console.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  },
);
