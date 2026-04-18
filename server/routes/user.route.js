import express from "express";
import {
  login,
  getProfile,
  register,
  logout,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
const route = express.Router();

route.post("/register", register);
route.post("/login", login);
route.get("/profile", isAuthenticated, getProfile);
route.get("/logout", isAuthenticated, logout);
export default route;
