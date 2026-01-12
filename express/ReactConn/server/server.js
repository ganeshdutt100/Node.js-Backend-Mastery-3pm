const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Home page API " });
});
app.get("/api/data", (req, res) => {
  res.json({
    message: "Namaste from Backend ",
    skills: ["html", "css", "js", "tailwind", "react"],
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
