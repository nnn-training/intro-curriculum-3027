'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const path = req.url;
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8' // htmlに変えてしまう
  });
  res.end(encodeURIComponent(path)); // エンコードしてしまえば悪さ出来ない
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
