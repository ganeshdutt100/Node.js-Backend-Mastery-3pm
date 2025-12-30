const fs = require("fs");

fs.mkdir("deletedFiles", (err) => {
  if (err) console.error(err);
  console.log("Directory Created Successfully!");
});
// fs.unlink("append.html", (err) => {
//   if (err) console.error(err);
//   console.log("File Unlink Successfully!");
// });

// fs.rename("app3.html", "append.html", (err) => {
//   if (err) console.error(err);
//   console.log("File Rename Successfully!");
// });

// fs.appendFile("app3.html", "\n Appending New Content  :  ", (err) => {
//   if (err) throw err;
//   console.log("Data Append Successfully!");
// });

// fs.readFile("app3.html", "utf-8", (err, data) => {
//   if (err) {
//     console.error("File read error : ", err);
//     return;
//   }
//   console.log("File Read :  ", data);
// });

// fs.writeFile("app3.html", "app3 File ", (err) => {
//   if (err) {
//     console.error("Error writing file", err);
//     return;
//   }
//   console.log("file Written Successfully!");
// });
