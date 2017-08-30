var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var e = new Error('REJECTED!');
        reject(e);
    }, 300);
});

p.then(null, onReject);
function onReject(error) {
    console.log(error.message);
}