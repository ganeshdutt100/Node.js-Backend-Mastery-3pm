const express = require("express");
const mongoose = require("mongoose");
const Feedback = require("./models/Feedback");
const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// mongoose
mongoose
  .connect("mongodb://localhost:27017/feedback_db")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("feedback");
});

app.post("/submit-feedback", async (req, res) => {
  try {
    const newFeedback = new Feedback({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await newFeedback.save();
    res.render("success", { name: req.body.name });
  } catch (err) {
    console.log(err);
    res.send("Error saving feedback");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
