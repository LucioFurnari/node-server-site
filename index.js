const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url)
  switch (req.url) {
    case '/':
      // Read file
      fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      })
      break;
    case '/about':
      // Read file
      fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
      })
      break;
    case 'contact-me':
      fs.readFile(path.join(__dirname, 'public', 'contact-me'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content, 'utf-8')
      })
    default:
      break;
  }
});

server.listen(5000)