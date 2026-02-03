const express = require("express");
const connectDB = require("./config/db");
const StudentRoutes = require("./routes/studentRoutes");
const app = express();

app.use(express.json());
//DB Connect
connectDB();

const PORT = process.env.PORT || 3000;

app.use("/api/students", StudentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
