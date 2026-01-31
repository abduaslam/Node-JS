const express = require("express");
const path = require("path");
const router = require("./views/router");

const app = express();
const PORT = 4002;

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
