const fs = require("fs");
try {
  let data = fs.readFileSync("SyncFile.txt", "utf-8");
  console.log("File read Successfully! :  ", data);
} catch (err) {
  console.error("File read Error", err);
}
// try {
//   fs.writeFileSync("SyncFile.txt", "i am Sync File ");
//   console.log("File Written Successfully!");
// } catch (err) {
//   console.error("File write Error", err);
// }
