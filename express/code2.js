const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});
app.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
