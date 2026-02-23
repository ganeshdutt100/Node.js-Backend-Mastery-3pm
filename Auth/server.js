const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jg_db");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

const PORT = process.env.PORT || 5000;

// Home page
app.get("/", (req, res) => {
  res.render("index", { messages: null, error: null });
});

app.post("/submit", async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.send(
    "<script>alert('Thank you for your message!'); window.location.href = '/';</script>",
  );
});

app.post("/admin", async (req, res) => {
  const pass = req.body.password;
  if (pass == "Ganesh123") {
    const allMessages = await Contact.find({}).sort({ date: -1 });
    res.render("index", { messages: allMessages, error: null });
  } else {
    res.render("index", { messages: null, error: "Invalid password" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
