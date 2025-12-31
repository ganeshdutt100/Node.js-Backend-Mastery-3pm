const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  switch (req.url) {
    case "/":
      res.end("<h1>i am Home page</h1>");
      break;
    case "/about":
      res.end("<h1>i am About page</h1>");
      break;
    case "/contact":
      res.end("<h1>i am Contact page</h1>");
      break;
    default:
      res.statusCode = 404;
      res.end("<h1>404 - Page Not Found</h1>");
      break;
  }
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
