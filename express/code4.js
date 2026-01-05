const express = require("express");
const app = express();

const PORT = 3000;

app.get("/user/:name/:course", (req, res) => {
  //   const data = req.params.name;
  //   const course = req.params.course;
  const { name, course } = req.params;
  res.send(`Hello ${name} you are enrolled in ${course}`);
});

// app.get("/api/user", (req, res) => {
//   const user = {
//     name: "Aditya Gupta",
//     age: 21,
//     skills: ["HTML", "CSS", "JS", "React", "Tailwind", "Node.js"],
//     isHired: true,
//   };
//   res.json(user);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port s`);
});
