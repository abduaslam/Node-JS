const express = require("express");
const path = require("path");
const router = require("./src/router");

const app = express();
const PORT = 4002;

app.use("/rout1", router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
