const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
