const express = require("express");
const app = express();

// app.use(express.json());

// Syntax
// (req,res,next)=>{
//     next()
// }

const requestLogger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toLocaleTimeString();
  console.log(`[${time} ${method}  Request on  ${url}]`);
  next();
};

app.use(requestLogger);

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});
app.get("/about", (req, res) => {
  res.json({ message: "About Us" });
});
app.get("/contact", (req, res) => {
  res.json({ message: "contact Us" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
