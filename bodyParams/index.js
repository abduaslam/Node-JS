const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
    res.send(` the name is ${req.body.name} and The his age is ${req.body.age}`)
})



app.listen(3000,()=>{
    console.log("the the project is runing in port 3000")
})