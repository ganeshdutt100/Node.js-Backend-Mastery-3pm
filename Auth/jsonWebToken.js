let jwt = require("jsonwebtoken");

// let token = jwt.sign({ foo: "bar" }, "shhhhh");
// console.log(token);

let userPayload = { id: 1, username: "Aditya Gupta" };
let secretKey = "MySecretKey";

const token = jwt.sign(userPayload, secretKey, { expiresIn: "1h" });
console.log(token);

try {
  const decoded = jwt.verify(token, secretKey);
  console.log(decoded);
} catch (err) {
  console.log(err);
}
