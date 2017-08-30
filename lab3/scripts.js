var friends = ["Huey", "Dewey", "Louie", "Chewie", "Schoolboy Q"];

//Button Event
var btn = document.getElementById('my-btn');

btn.addEventListener('click', function() {
    document.getElementById('content').innerHTML = "";
    for (var i = 0; i < friends.length; i++) {
        var friendBox = document.createElement('div');
        var friendHeader = document.createElement('h3');
        var nameText = document.createTextNode(friends[i]);

        friendBox.appendChild(friendHeader);
        friendBox.className = 'friend';
        friendHeader.appendChild(nameText);

        for (var j = 99; j > 0; j--) {
            var friendPara = document.createElement('p');
            if (j > 2) {
                var friendLine = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file.");
            } else if (j === 2) {
                var friendLine = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " line of code in the file.");
            } else {
                var friendLine = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file.");
            }
        
        document.getElementById('content').appendChild(friendBox);
        friendBox.appendChild(friendPara);
        friendBox.appendChild(friendPara);
        friendPara.appendChild(friendLine);
        }   
    }    
});





// ANOTHER SOLUTION (Iterate with i++ instead of .shift-ing array)

// for (var i = 0; i < friends.length; i++) {
//     console.log(friends[i].toUpperCase() + ":");
//     for (var j = 99; j > 0; j--) {
//         if (j > 2) {
//             console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file.");
//         } else if (j === 2) {
//             console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " line of code in the file.");
//         } else {
//             console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file.");
//         }
//     }
// }