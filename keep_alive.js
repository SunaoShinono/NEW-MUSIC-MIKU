var http = require('http');

http.createServer(function (req, res) {
  res.write("Miku is Working.");
  res.end();
}).listen(8080);
