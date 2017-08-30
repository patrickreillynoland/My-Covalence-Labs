var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    // var readStream = fs.createReadStream(process.argv[3]);
    // readStream.pipe(res);

    fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(process.argv[2]);

