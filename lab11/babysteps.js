var j = 0;

for (i = 2; i < process.argv.length; i++) {
    var j = j + +process.argv[i];
};

console.log(j);