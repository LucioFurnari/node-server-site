const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // Read file
  fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content, 'utf-8');
  })
});

server.listen(5000)