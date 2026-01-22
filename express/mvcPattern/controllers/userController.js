const getUser = (req, res) => {
  res.json({
    message: "all user data list ",
    users: ["A", "b", "c", "d"],
  });
};
const registerUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({
      error: "name and email not fill",
    });
  }
  res.json({
    message: `User ${name} registered successfully`,
    data: { name, email },
  });
};

module.exports = {
  getUser,
  registerUser,
};
