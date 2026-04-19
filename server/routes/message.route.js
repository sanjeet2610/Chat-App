import express from "express";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
const route = express.Router();

route.post("/send/:receiverId", isAuthenticated, sendMessage);
route.get("/get-message/:othersId", isAuthenticated, getMessage);

export default route;
