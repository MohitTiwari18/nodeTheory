const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express(); //including this line neccessary for post,put and delete  data
app.use(express.json());

//delete route start from here
app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});
app.listen(5008, () => {
  console.log("server is running on port 5008");
});
