const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request sent');
  res.end('Hello world');
})

server.listen(5000, () => {
  console.log('Server listning on port : 5000...');
})