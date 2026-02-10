import express from "express"
import dotenv from "dotenv"
import route from "./route/register.js"
import mongoose from "mongoose"

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/Users")
.then(()=>{
    console.log("The database is connected")
})
const App=express();

App.get("/test",(req,res)=>{
    res.send("Your server is working")
})
App.use("/reg",route)
App.listen(4000,()=>{
    console.log("the server is runing in port 4000")
})