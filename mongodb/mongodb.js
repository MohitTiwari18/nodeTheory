//This file is going to remain same from here...
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const database = "e-comm";
const client = new MongoClient(url);

//from here i have created a function -->
async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}
module.exports = dbConnect;
