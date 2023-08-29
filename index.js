const http = require('http');
const path = require('path');
const fs = require('fs');
const getPage = require('./functions.js')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url)
  switch (req.url) {
    case '/':
      fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      })
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end( getPage('about.html'), 'utf-8');
      break;
    case '/contact-me':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end( getPage('contact-me.html'), 'utf-8');
      break;
    default:
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end( getPage('404.html'), 'utf-8')
      break;
  }
});

server.listen(5000)