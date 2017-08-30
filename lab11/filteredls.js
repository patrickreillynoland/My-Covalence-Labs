var fs = require('fs');
var path = require('path');

var ext = "." + process.argv[3];

// utf8 turns it into string.
fs.readdir(process.argv[2], 'utf8', function (err, data) {
    if (err) {
        throw err;
    };

    data.forEach(function(file) {
        var suf = path.extname(file);
        if (ext === suf) {
            console.log(path.basename(file));
        }
    });
});