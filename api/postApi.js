const express = require("express");
const dbConnect = require("./mongodb");
const app = express();
app.use(express.json());
app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result); //  resp.send({ name: "anil" }); //using req.body we can get printed data in the
});
app.listen(5006, () => {
  console.log("server is running on port 5006");
});
