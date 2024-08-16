const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

//HERE HOW TO RENDER HTML IS SHOWING DOWN
//app.get("", (req, res) => {
//  console.log("data sent by browser ===>>>", req.query.name);
//  res.send("Welcome," + req.query.name);
//});
//app.get("/about", (req, res) => {
//  res.send("Welcome, this is about page");
//});
//app.listen(5000);
