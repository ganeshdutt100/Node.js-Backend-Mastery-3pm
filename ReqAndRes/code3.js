const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Hello World</h1>
</body>

</html>
    `);
  res.end();
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
