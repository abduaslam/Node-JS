// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // MUST be first

// const app = express();

// const PORT = process.env.PORT || 5000;
// const DB_URL = process.env.DB_URL;

// console.log("DB_URL:", DB_URL); // debug check

// function connectDB() {
//   mongoose
//     .connect(DB_URL)
//     .then(() => {
//       console.log("✅ Database connected");
//     })
//     .catch((err) => {
//       console.error("❌ Database connection error:", err.message);
//     });
// }

// app.get("/read", (req, res) => {
//   res.json({ message: "hello my student" });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   connectDB();
// });

import express from "express"
import nameRoute from "./routes/routeName.js"
import mongoose from "mongoose";
const app =express();
const PORT =5000
mongoose.connect("mongodb://localhost:27017/Names")
.then(()=>{
    console.log("The databse connected seccessful")
}).catch((error)=>{
console.log(error
)
})
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to the name API")
})

app.use("/name",nameRoute)

app.listen(PORT,()=>{
    console.log("The Server is runing in port 5000")
})