const dbConnect = require("./mongodb");
const deleteData = async () => {
  console.log("code for delete data in mongodb");
  let data = await dbConnect();
  let result = await data.deleteMany({ name: "max 7 abc" }); //deleteMany can delete many data together
  console.warn(result);
  if (result.acknowledged) {
    //acknowledge read the functionality
    console.log("record deleted");
  }
};
deleteData();
