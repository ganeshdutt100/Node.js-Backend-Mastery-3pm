const Student = require("../models/Student");
//Add New Student
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json({
      success: true,
      data: student,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Server Error",
    });
  }
};
