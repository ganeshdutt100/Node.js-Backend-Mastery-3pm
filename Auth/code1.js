const express = require("express");
const app = express();
let cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});
app.get("/login", (req, res) => {
  res.cookie("profile", "Ganesh_Dutt");
  res.send("user authenticated , ");
});
app.get("/dashboard", (req, res) => {
  const profile = req.cookies.profile;
  if (profile === "Ganesh") {
    res.send("Welcome to dashboard , Ganesh Dutt");
  } else {
    res.send("User not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
