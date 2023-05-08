const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    fs.readFile(path.join(__dirname, 'server', 'db.json'), 'utf8', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    fs.readFile(path.join(__dirname, 'build', 'index.html'), 'utf8', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});