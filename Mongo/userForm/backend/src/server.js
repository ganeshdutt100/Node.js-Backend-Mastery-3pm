const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// DB_Connection
connectDB();

const PORT = process.env.PORT || 3000;

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
