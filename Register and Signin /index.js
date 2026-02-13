import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRegister from "./route/register.js";

dotenv.config();

const App = express();

// middleware
App.use(express.json());

// mongoose config
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/RegisterAndSignin")
  .then(() => console.log("The database is connected"))
  .catch((err) => console.error(err));

// test route
App.get("/test", (req, res) => {
  res.send("Your server is working");
});

// register route
App.use("/register", userRegister);

// start server
App.listen(4000, () => {
  console.log("The server is running on port 4000");
});
