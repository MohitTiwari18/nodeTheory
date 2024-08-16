const dbConnect = require("./mongodb");

//this is the database code to console the json file.
// dbConnect().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });

//create function to handle promise
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};
main();
