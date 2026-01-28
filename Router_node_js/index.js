import users from "./routers/Users.js"
import comments from "./routers/comments.js"
import express from "express"; 
import path from "path"  
const app =express();
const PORT=2000;
app.use(express.json())
app.use("/users",users)
app.use("/comments",comments)

app.get("/test",(req,res)=>{
    res.send("testing app file")
})

app.listen(PORT,()=>{
    console.log(`The server is runing in port ${PORT}`)
})