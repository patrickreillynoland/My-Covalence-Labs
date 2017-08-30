var fs = require('fs');

var answer = fs.readFileSync(process.argv[2]);
var string = answer.toString().split('\n').length - 1;
console.log(string);