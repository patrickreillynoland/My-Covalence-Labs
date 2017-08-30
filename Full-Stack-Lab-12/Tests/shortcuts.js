var greeting = new Promise.resolve('IT IS RESOLVED.');
var warning = Promise.reject('TORNADO INCOMING');

greeting.then(console.log);
// warning.then(null, console.log);
warning.catch(console.log);
