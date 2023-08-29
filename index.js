const http = require('http');
const path = require('path');
const fs = require('fs');
const setPage = require('./functions.js')

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
      fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
      })
      break;
    case '/contact-me':
      fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      })
      break;
    default:
      fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8')
      })
      break;
  }
});

server.listen(5000)