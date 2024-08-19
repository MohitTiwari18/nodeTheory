const express = require("express");
const dbConnect = require("./mongodb");
const app = express(); //including this line neccessary for post and put data
app.use(express.json());
app.put("/", async (req, resp) => {
  let data = await dbConnect();
  let result = data.updateOne(
    {
      name: "U 10",
    },
    {
      $set: { price: 1900 },
    }
  );
  console.log(req.body); //this line for: print data on terminal
  resp.send({ result: "update" });
});
app.listen(5007, () => {
  console.log("server is running on port 5007");
});
