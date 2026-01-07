const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.get("/search", (req, res) => {
  console.log(req.query);

  const { item, sort } = req.query;
  res.json({
    searchedFor: item,
    sorting: sort,
    message: `Apne ${item} search kiya hain ${sort} order me maanga hai`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
