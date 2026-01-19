const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const filePath = path.join(__dirname, "../data/user.json");

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
});

router.post("/add", (req, res) => {
  const newUser = req.body;
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: "User added successfully" });
});

module.exports = router;
