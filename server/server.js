import "dotenv/config";
import express from "express";
import { connectDb } from "./db/connection1.db.js";

connectDb();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

//routes
import route from "./routes/user.route.js";
app.use("/", route);

//middlewares
import { errorMiddleware } from "./middlewares/error.middleware.js";
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("server started");
});
