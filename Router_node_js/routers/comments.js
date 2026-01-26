import express from "express";

const commentRouter=express.Router()
commentRouter.get("/Users",(req,res)=>{
    res.send("Here your data  ")
})
commentRouter.post("/create",(req,res)=>{
res.send('User created')
})
commentRouter.put("/update",(req,res)=>{
res.send('User updated')
})
commentRouter.delete("/delete",(req,res)=>{
res.send('User deleted')
})
export default commentRouter