function delay() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("TIMED OUT!");
        }, 300)
    })
};

delay();

//Official answer:
// 'use strict';
//     // Set a timeout of 300ms
//     setTimeout(function () {
//       // After 300ms has elapsed, print out 'TIMED OUT!'
//       console.log('TIMED OUT!');
//     }, 300);