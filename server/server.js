import "dotenv/config";
import express from "express";
import { connectDb } from "./db/connection1.db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

connectDb();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
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
