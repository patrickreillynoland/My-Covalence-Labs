var net = require('net');
var port = process.argv[2];
var d = new Date();

var server = net.createServer(function(socket) {
    var dateString = String(d.getFullYear() + '-' + (d.getMonth().dblDigit + 1) + '-' + d.getDate().dblDigit + ' ' + d.getHours().dblDigit + ':' + d.getMinutes().dblDigit + '\n');
    // socket.write(dateString);
    // socket.end();
    socket.end(dateString);
});

server.listen(port);

function dblDigit(value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return value;
    }
}