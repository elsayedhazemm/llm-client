const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const html = fs.readFileSync(path.join(__dirname, 'index.html'));

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(PORT, HOST, () => {
  console.log(`http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`);
});
