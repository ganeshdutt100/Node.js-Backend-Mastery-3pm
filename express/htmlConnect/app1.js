const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const users = [
  {
    id: 1,
    name: "Aditya",
    age: 21,
    details:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsam!",
  },
  {
    id: 2,
    name: "Rajneesh",
    age: 23,
    details:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsam!",
  },
  {
    id: 3,
    name: "Amar",
    age: 25,
    details:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsam!",
  },
  {
    id: 4,
    name: "Aditi",
    age: 16,
    details:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsam!",
  },
  {
    id: 5,
    name: "Gourav",
    age: 21,
    details:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsam!",
  },
  {
    id: 4,
    name: "Aditi",
    age: 16,
    details:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsam!",
  },
  {
    id: 5,
    name: "Gourav",
    age: 21,
    details:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsam!",
  },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
