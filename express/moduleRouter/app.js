const express = require("express");
const app = express();
const userRoutes = require("./router/userRouter");

app.use(express.json());

app.use("/users", userRoutes);
app.get("/user", (req, res) => {});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
