const express = require("express");
const router = express.Router();
const { saveUser } = require("../controllers/userControllers");
router.post("/saveUser", saveUser);

module.exports = router;
