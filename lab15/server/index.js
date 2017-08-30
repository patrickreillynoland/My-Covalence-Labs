var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var clientPath = path.join(__dirname, "../client");
var dataPath = path.join(__dirname, "data.json");

app.use(express.static(clientPath));
app.use(bodyParser.json());

// Don't need app.get for '/'; automatically done in Express.

app.route('/api/chirps')
    .get(function(req, res) {
        res.sendFile(dataPath); 
    })
    .post(function(req, res) {
        var newChirp = req.body;
        
        readFile(dataPath, 'utf8')
        .then(function(fileContents) {
            var chirps = JSON.parse(fileContents);
            chirps.push(newChirp);
            return writeFile(dataPath, JSON.stringify(chirps)); // 'return' here guarantees that the next '.then' statement waits on the result of the writeFile function. Otherwise, just because the function started, the statement is fulfilled so it fires the next one. 
        }).then(function() {
            res.sendStatus(201);
        }).catch(function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

        // Non-promisey, overly indented version of readFile. 
        //
        // fs.readFile(dataPath, 'utf8', function(err, data) {
        //         var chirpDeck = JSON.parse(data);
        //             if (err){
        //                 res.sendStatus(500);
        //             } else { 
        //                 var chirpDeck = JSON.parse(data);
        //                 chirpDeck.push(newChirp);
        //                 fs.writeFile(dataPath, JSON.stringify(chirpDeck), function (err) {
        //                     if (err){
        //                         res.sendStatus(500);
        //                     } else {
        //                         res.sendStatus(201);
        //                     }
        //             });
        //         }
        //     });
       

app.listen(3000);

function readFile(filePath, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, encoding, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(filePath, data) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(filePath, data, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(); // If not manually resolved, will continue indefinitely.
            }
        });
    });
}