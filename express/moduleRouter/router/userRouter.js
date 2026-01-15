const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All user");
});

router.post("/add", (req, res) => {
  res.send("User Added");
});

module.exports = router;
