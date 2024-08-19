//Api call
const express = require("express");
require("./config");
const Product = require("./product");
const app = express();
app.use(express.json());

//POST METHOD
app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

//GET METHOD
app.get("/list", async (req, resp) => {
  let data = await Product.find(); //find model ke liye schema pass karne ki jarurat nhi hai
  resp.send(data);
});

//PUT METHOD
app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});

//DELETE METHOD
app.delete("/delete/:_id", async (req, resp) => {
  //underscore id use karna hota hai
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});
app.listen(5013);
