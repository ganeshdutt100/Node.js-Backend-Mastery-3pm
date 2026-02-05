const User = require("../models/User.js");
exports.saveUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.json({
      message: "User saved successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
