const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3000;

const secretKey = "admin123";

const isLoggedIn = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.send("not login");
  try {
    const data = jwt.verify(token, secretKey);
    req.user = data;
    next();
  } catch (err) {
    return res.send("token expire ho  gya hai ");
  }
};

app.get("/", (req, res) => {
  let token = jwt.sign(
    { email: "aditya@gmail.com", username: "Aditya Gupta" },
    secretKey,
    {
      expiresIn: "1h",
    },
  );
  res.cookie("token", token);
  res.send("Login Successful ");
});

app.get("/profile", isLoggedIn, (req, res) => {
  console.log("logged in user", req.user);
  res.send(`welcome , ${req.user.email}, name  :  ${req.user.username}`);
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send("logged out successfully");
});
app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
