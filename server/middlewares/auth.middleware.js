import jwt from "jsonwebtoken";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import User from "../models/user.model.js";

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new errorHandler("Not authorized,no token", 401);
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded._id);

  if (!user) {
    throw new errorHandler("User not found", 404);
  }

  req.user = user;
  next();
});
