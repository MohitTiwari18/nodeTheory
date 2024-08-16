//This is the route with html code to show the data
// const express = require("express");
// const app = express();
// app.get("", (req, resp) => {
//   console.log(req.query.name);
//   resp.send("Welcome," + req.query.name);
// });
// app.get("/about", (req, resp) => {
//   resp.send("Welcome, This is a About Page");
// });
// app.get("/help", (req, resp) => {
//   resp.send("Welcome, This is a Help Page");
// });
// app.listen(5001);

//this is the route with json code to show the data
const express = require("express");
const app = express();
app.get("/about", (req, resp) => {
  resp.send([
    {
      Name: "Mohit",
      Email: "mohit@gmail.com",
    },
  ]);
});
app.listen(5001);
