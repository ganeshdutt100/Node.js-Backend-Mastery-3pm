const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
  //   res.send("Welcome to the API");
});

app.get("/api/user", (req, res) => {
  const user = {
    name: "Aditya Gupta",
    age: 21,
    skills: ["HTML", "CSS", "JS", "React", "Tailwind", "Node.js"],
    isHired: true,
  };
  res.json(user);
});
app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});

// api/product - Iphone17(orange , silver, black) price
