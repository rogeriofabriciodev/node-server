const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("It's Great!!!");
  console.log("Sevidor Rodando Docker");
});

app.listen(3000);