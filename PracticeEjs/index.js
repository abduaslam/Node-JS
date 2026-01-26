const express=require("express")
const app=express();
const PORT=4002;
const path=require("path")
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"src","index.html"))
})
app.listen(PORT,()=>{
    console.log(`the server is runing in port ${PORT}`)
})