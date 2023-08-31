const http = require('http');
const path = require('path');
const fs = require('fs');
const getPage = require('./functions.js')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url)

  // Build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  console.log('Path:' + filePath)

  // File extension
  let fileExt = path.extname(filePath);
  console.log('Extension: '+fileExt)
  // Content type - default
  let contentType = 'text/html'

  switch (fileExt) {
    case '.css':
      contentType = 'text/css';
      
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    default:
      break;
  }

  switch (req.url) {
    case '/':
      fs.readFile(filePath, (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': contentType });
        res.write(content, 'utf-8')
        res.end()
      })
      break;
    case '/about':
      fs.readFile(filePath + '.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': contentType});
        res.write(data, 'utf-8');
        res.end()
      });
      break;
    case '/contact-me':
      fs.readFile(filePath + '.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': contentType});
        res.write(data, 'utf-8');
        res.end()
      });
      break;
    case '/css/style.css':
      fs.readFile(filePath, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': contentType});
        res.write(data, 'utf-8');
        res.end()
      });
      break;
    default:
      fs.readFile(path.join(__dirname, 'public', '404.html'), function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': contentType});
        res.write(data, 'utf-8');
        res.end()
      });
      break;
  }
});

server.listen(5000)