// const express = require("express");
import express from "express"
// const path = require("path");
import path from "path"
// const router = require("./views/router");
import router from "./views/router.js"
import mongoose from "mongoose";

const app = express();
const PORT = 4002;



// connect with atlas database
mongoose.connect("mongodb+srv://ABDU:abdo12@cluster0.salltgf.mongodb.net/?appName=Cluster0")
.then(()=>{
  console.log("The database has been connected")
})
.catch((error)=>{
  console.log(`there are errors in your database connection`)
})

app.use("/rout1", router);
 //bulid loop to count from 1 to 50 an then display the result in ejs file
   let result=0
 for(let i=1;i<=50;i++){
 result +=i+"  "
 }
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "src", "index.ejs"));
  res.render("index.ejs",{
    name:"abdalsalam",
    count:result
  })
});



app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
