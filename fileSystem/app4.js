const fs = require("fs");
// const data = fs.readFileSync("file1.txt");
// console.log(data);
// console.log(data.toString());

const readStream = fs.createReadStream("file1.txt", "utf-8");
readStream.on("data", (chunk) => {
  console.log("New Chunks :  ", chunk);
});
readStream.on("end", () => {
  console.log("End of Stream");
});
readStream.on("error", (err) => {
  console.log("Error", err);
});
