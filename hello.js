const http = require('http');
const port = 3009;

const server = http.createServer(function (req, res) {
});

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('hello ' + port);
  }
});
