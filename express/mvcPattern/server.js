const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
