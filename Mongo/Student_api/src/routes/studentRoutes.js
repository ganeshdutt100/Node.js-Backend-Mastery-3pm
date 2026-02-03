const express = require("express");

const {
  createStudent,
  getStudents,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/all", getStudents);

router.post("/add", createStudent);

module.exports = router;
