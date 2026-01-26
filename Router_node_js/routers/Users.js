
import express from "express";
const usersRouters=express.Router()
usersRouters.get("/Users",(req,res)=>{
    res.send("Here your data  ")
})
usersRouters.post("/create",(req,res)=>{
res.send('User created')
})
usersRouters.put("/update",(req,res)=>{
res.send('User updated')
})
usersRouters.delete("/delete",(req,res)=>{
res.send('User deleted')
})

export default usersRouters;