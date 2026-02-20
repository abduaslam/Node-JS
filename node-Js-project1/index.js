const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("Hello ,The first backend project")
})
app.get("/about",(req,res)=>{
    res.send("This is about me page")
})

app.post("/testPost",(req,res)=>{
    res.send(" testing post mothed in postman")
})

app.put("/testPut",(req,res)=>{
    res.send("testing put mothed in postman")
})
app.delete("/testDelete",(req,res)=>{
    res.send("testing delete mothed in postman")
})
app.patch("/testPatch",(req,res)=>{
    res.send("testin Patch mothed in postman")
})
 

// print numbers from 1 to 100 
app.get("/numbers",(req,res)=>{
    let numbers= ""
    for(let i=1;i<=100;i++){
        numbers += i +" ";
    }
    res.send(`the numbers are :${numbers}`)
})


app.listen(4000,()=>{
console.log("The server is runing now in port 4000")
})