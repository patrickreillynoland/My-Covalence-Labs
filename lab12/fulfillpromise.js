'use strict';
    function thisPromise() {
    var promise = new Promise(function (fulfill, reject) {
      setTimeout(function(res, err) {
          res = "FULFILLED!";
      }, 300);
    });
    };

    thisPromise().then(console.log(fulfill))