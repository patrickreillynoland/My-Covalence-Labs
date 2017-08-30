var friends = ["Huey", "Dewey", "Louie", "Chewie", "Schoolboy Q"];

for (var i = 0; i < friends.length; friends.shift()) {
    console.log(friends[0].toUpperCase() + ":");
    for (var j = 99; j > 0; j--) {
        if (j > 2) {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[0] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file.");
        } else if (j === 2) {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[0] + " strikes one out, clears it all out, " + (j-1) + " line of code in the file.");
        } else {
            console.log(j + " line of code in the file, " + j + " line of code; " + friends[0] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file.");
        }
    }
}

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