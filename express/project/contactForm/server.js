const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.post("/submit-data", (req, res) => {
  const { username, useremail } = req.body;
  console.log(`New Data -> Name : ${username} , Email : ${useremail}`);
  res.send(`
    
    <h1>Thank you for your submission</h1>
    <p>Name : ${username}</p>
    <p>Email : ${useremail}</p>
    <a href="/">Go back to the form</a>
  `);
});

const PORT = 3000;
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
