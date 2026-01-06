const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

app.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === "ganesh@123" && password === "12345") {
    res.json({
      status: "success",
      message: "Login Successful",
    });
  } else {
    res.json({
      status: "Failed",
      message: "Galat password hain ",
    });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
