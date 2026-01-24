const express =require("express")
const app=express()
app.get("/numbers/:name/:id",(req,res)=>{
 res.send(req.params.name+" "+req.params.id)

})

app.put('/:age/:name',(req,res)=>{
  res.send(`your age is ${req.params.age} your name is ${req.params.name}`)
})




app.listen(4000,()=>{
    console.log("the server is runing in port 400 ")
})