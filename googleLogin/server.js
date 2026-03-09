const express = require("express");
const passport = require("passport");
const session = require("express-session");

const app = express();
require("./auth/google");

app.use(express.json());
app.use(
  session({
    secret: "keyboard_cat",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <a href="/auth/google">Google</a>
    <a href="/auth/google">Github</a>
    `);
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
);

function authCheck(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

app.get("/profile", authCheck, (req, res) => {
  res.send(`
    <h1>Welcome ${req.user.displayName}</h1>
    <img src='${req.user.photos[0].value}'>
    <a href="/logout">logout</a>
    `);
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
