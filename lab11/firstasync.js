var fs = require('fs');


var answer = fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        throw "err";
    }
    var string = data.toString().split('\n').length - 1;
    console.log(string);
});