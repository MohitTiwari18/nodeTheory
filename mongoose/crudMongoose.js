const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "m 10",
    price: 1000,
    brand: "maxx",
    category: "Mobile",
  });
  const result = await data.save();
  console.log("Data saved successfully:", result);
};
const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "i phone" },
    {
      $set: { name: "I phone", price: 600 },
    }
  );
  console.log(data);
};
updateInDB();
