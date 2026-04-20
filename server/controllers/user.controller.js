import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  const tokenData = {
    _id: newUser._id,
  };

  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  res
    .status(201)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
      ),
      httpOnly: true,
      secure: true,
      sameSite: "None",
    })
    .json({
      success: true,
      responseData: {
        newUser,
        token,
      },
    });
});

export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new errorHandler("Enter all field", 400);
  }

  const user = await User.findOne({ username });
  if (!user) {
    throw new errorHandler("User not registered", 400);
  }

  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    throw new errorHandler("Please enter valid username or password", 400);
  }

  const tokenData = {
    _id: user._id,
  };

  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  res
    .status(200)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
      ),
      httpOnly: true,
      secure: true,
      sameSite: "None",
    })
    .json({
      success: true,
      responseData: {
        user,
        token,
      },
    });
});

export const getProfile = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const profile = await User.findById(userId);
  res.status(200).json({
    success: true,
    responseData: {
      profile,
    },
  });
});

export const logout = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "None",
    })
    .json({
      success: true,
      message: "Logout successful",
    });
});

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const otherUsers = await User.find({ _id: { $ne: req.user._id } });
  res.status(200).json({
    success: true,
    responseData: otherUsers,
  });
});
