var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        var urlData = url.parse(req.url, true);
        if (urlData.pathname === '/api/parsetime') {
            var d = new Date(urlData.query.iso);
            var data = {
                hour: d.getHours(),
                minute: d.getMinutes(),
                second: d.getSeconds()
            };
            res.writeHead(200, { 'Content-Type' : 'application/json'});
            res.end(JSON.stringify(data));
        } else if (urlData.pathname === '/api/unixtime') {
            var d = new Date(urlData.query.iso);
            var data = {
                unixtime: d.getTime()
            };
            res.writeHead(200, { 'Content-Type' : 'application/json'});
            res.end(JSON.stringify(data));
        } else {
            res.writeHead(404);
            res.end('');
        }
    }
});

server.listen(process.argv[2]);