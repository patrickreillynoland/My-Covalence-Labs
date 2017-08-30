var p = new Promise(function(resolve, reject) {
    resolve("PROMISE VALUE");
});

p.then(console.log);
console.log('MAIN PROGRAM'); // This ends up logging first; if there is code after the 'then' handler that isn't part of its block, then that has to finish running before the "then" finally fires.

