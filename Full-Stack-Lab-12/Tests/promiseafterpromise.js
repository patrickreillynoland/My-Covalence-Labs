var p = first();

p.then(function(secret){
    second(secret);
}).then(function(success) {
    console.log(success);
});