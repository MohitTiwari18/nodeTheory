// NOTES OF DISPLAY THE LIST OF ITEM AND FOLDERS FROM THE FOLDER

//const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// for (i = 0; i < 4; i++) {
//   fs.writeFileSync(dirPath + `/hello${i}.txt`, "simple tet file");
//   // can write like this without template literals--> fs.writeFileSync(dirPath + "/hello" + i + ".txt", "simple tet file");
// }
// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log("file name is : ", item);
//   });
// });

//THIS IS THE NEW PART WHICH INCLUDE CRUD OPERATION USING FILE SYETEM
//const fs = require("fs");
//const path = require("path");
//const dirPath = path.join(__dirname, "crud");
//const filePath = `${dirPath}/apple.txt`;
//fs.writeFileSync(filePath, "this is a simple file");
//fs.readFile(filePath, "utf8", (err, item) => {
//  console.log(item);
//});
// fs.appendFile(filePath,' for fruits',(err)=>{
// if(!err) console.log("file is updated")
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })
//fs.unlinkSync(`${dirPath}/fruit.txt`);

// ASYNCHRONOUS PROGRAMMING START FROM HERE ------->>>>>
//let a = 10;
//let b = 0;
//setTimeout(() => {
//  b = 20;
//}, 2000);
//console.log(a + b);

//solving drawback of the async programming
//let a = 10;
//let b = 0;
//let waitingData = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve(30);
//  }, 2000);
//});
//waitingData.then((data) => {
//  b = data;
//  console.log(a + b);
//});
