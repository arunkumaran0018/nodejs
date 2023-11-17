const express = require("express");
const app = express();
const path = require("path");

app.get("/nature.html", (req, res) => {
  res.sendFile(path.join(__dirname, "nature.html"));
});

app.get("/alert.html", (req, res) => {
  res.sendFile(path.join(__dirname, "alert.html"));
});
app.get("/test.html", (req, res) => {
  res.sendFile(path.join(__dirname, "test.html"));
});

app.listen(4012, () => {
  console.log("Server is running on port 4012");
});
