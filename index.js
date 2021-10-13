'use strict';
const http = require('http'); // httpというモジュール(一定の能力を持ったもの)
const server = http.createServer((req, res) => {
  const path = req.url;
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end(path);
}); // const server からここまでhttpサーバーを作成している
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
