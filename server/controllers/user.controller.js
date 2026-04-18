import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";

export const register = asyncHandler(async (req, res, next) => {
  const { fullName, username, gender, password } = req.body;
  if (!fullName || !username || !gender || !password) {
    throw new errorHandler("missing field", 400);
  }

  const user = await User.findOne({ username });
  if (user) {
    throw new errorHandler("User already exist", 400);
  }

  const avatar = `https://robohash.org/${username}`;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    fullName,
    username,
    gender,
    password: hashedPassword,
    avatar,
  });
  res.status(201).json({
    status: true,
    responseData: {
      newUser,
    },
  });
});

export const login = (req, res) => {
  res.send("I am login route");
};
