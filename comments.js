// Create a web server
// Listen for requests on port 3000
// When a request comes in, read comments from disk
// Send comments back to the client

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('comments.json', function (err, data) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
});

server.listen(3000);
console.log('Server listening on port 3000');