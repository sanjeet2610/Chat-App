import "dotenv/config";
import express from "express";
import { connectDb } from "./db/connection1.db.js";
import cookieParser from "cookie-parser";

connectDb();
const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT;

//routes
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
app.use("/user", userRoute);
app.use("/message", messageRoute);

//middlewares
import { errorMiddleware } from "./middlewares/error.middleware.js";
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("server started");
});
