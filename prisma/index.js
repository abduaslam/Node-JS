import express from "express"
const app=express();
const PORT =5005;
app.get("/",(req,res)=>{
    res.send("the first nodejs project ")
})

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

app.listen(PORT,()=>{
    console.log(`the Server is runing in port  ${PORT}`)
})