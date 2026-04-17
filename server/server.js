import express from "express";
import route from "./routes/user.route.js";

const app = express();
const PORT = 5000;

//routes
app.use("/", route);

app.listen(PORT, () => {
  console.log("server started");
});
