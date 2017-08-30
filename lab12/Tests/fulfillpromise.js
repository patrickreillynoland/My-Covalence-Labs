var p = new Promise(function(resolve, reject) { // that first argument, when complete = resolve. that second argument, when complete = reject. 
    setTimeout(function() {
        resolve("RESOLVED");
    }, 300);
});

p.then(function(success) {
    console.log(success);
}, function(err) {
    console.log(err);
}

// 