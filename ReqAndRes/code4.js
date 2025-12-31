const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.headers, req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.end(`
     <h1>I am Home page</h1>
    `);
  } else if (req.url === "/about") {
    res.end(`
     <h1>I am About page</h1>
    `);
  } else if (req.url === "/contact") {
    res.end(`
     <h1>I am Contact page</h1>
    `);
  } else {
    res.statusCode = 404;
    res.end(`
        <h1>404 - Page Not Found</h1>
        `);
  }
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
