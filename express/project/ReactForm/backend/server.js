const express = require("express");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
