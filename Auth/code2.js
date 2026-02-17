const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// const hashPassword = async () => {
//   const password = "123456";
//   const hashed = await bcrypt.hash(password, 10);
//   console.log("Hashed password :  " + hashed);
// };
// hashPassword();

const password = "Ganesh@123";
// bcrypt.genSalt(10, function (err, salt) {
//   bcrypt.hash(password, salt, function (err, hash) {
//     if (err) return console.error(err);

//     console.log("Password :  ", password);
//     console.log("Salt :  ", salt);
//     console.log("hashed  password  +  salt :  ", hash);
//   });
// });
const verifyPassword = async () => {
  const password = "Ganesh@123";
  const hashPassword =
    "$2b$10$N7qZ8bJWtd1RvvpjV4pF0.BOhilcw1SPtneK7.e0p/U.fiN3ULEOK";
  const match = await bcrypt.compare(password, hashPassword);
  console.log(match ? "password Correct" : "Password Wrong");
};
verifyPassword();

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// 2^10 = 1024
