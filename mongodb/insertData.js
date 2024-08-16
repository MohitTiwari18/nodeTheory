const dbConnect = require("./mongodb");

const insertData = async () => {
  let data = await dbConnect();
  let result = await data.insertMany([
    //data.insertMany should be used for inserting multiple data, for single data there should use insearOne
    { name: "max 5", brand: "micromax", price: 420, category: "mobile" },
    { name: "max 6", brand: "micromax", price: 520, category: "mobile" },
    { name: "max 7", brand: "micromax", price: 620, category: "mobile" },
  ]);
  if (result.acknowledged) {
    console.warn("data is inserted");
  }
};

insertData();
