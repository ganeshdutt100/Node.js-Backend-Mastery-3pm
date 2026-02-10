const express = require("express");
const app = express();

app.use(express.json());
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const userName = "Ganesh Dutt";
  res.render("index", { name: userName });
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
