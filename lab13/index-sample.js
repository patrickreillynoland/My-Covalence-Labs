var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var dataPath = path.join(__dirname, 'data.json');
var clientPath = path.join(__dirname, '../client');
var server = http.createServer(function(req, res) {
    var urlData = url.parse(req.url, true);

    if (urlData.pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        fs.createReadStream(path.join(clientPath, 'index.html')).pipe(res);
    } else if (urlData.pathname === '/api/chirps') {
        switch (req.method) {
            case 'GET':
            // GET STUFF
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            fs.createReadStream(dataPath).pipe(res);
            break;
            case 'POST':
            // POST STUFF
            break;
        }
    }
});
server.listen(3000);