// Req is sent by the client to the server
// Res is sent by the server to the client

const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
