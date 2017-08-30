var button = document.createElement('button');
var buttonText = document.createTextNode('Add Square!');
var squareCount = 0;

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener('DOMContentLoaded', function(){
    document.body.appendChild(button);
    button.appendChild(buttonText);

    button.addEventListener('click', function() {  
        var squareText = document.createElement('p');
        var squareNumber = document.createTextNode(squareCount);
        var square = document.createElement('div');
        square.className = 'square';
        square.id = squareCount;  
        document.body.appendChild(square);
        square.appendChild(squareText);
        squareText.appendChild(squareNumber);
        squareCount++;
        
        square.addEventListener('click', function() {
            this.style.background = randomColors();
        });

        square.addEventListener('mouseenter', function() {
            this.getElementsByTagName('p')[0].classList.add('show');
        });

        square.addEventListener('mouseleave', function() {
            this.getElementsByTagName('p')[0].classList.remove('show');
        });

        square.addEventListener('dblclick', function() {
            var thisId = this.id;

            if (thisId % 2 === 0) {
                if (this.nextSibling) {
                    this.nextSibling.remove();
                    squareCount--;
                } else {
                    alert('There are no elements to the right to remove.');
                 }
            } else if (thisId % 2 === 1) {
                if (this.previousSibling) {
                    this.previousSibling.remove();
                    squareCount--;                  
                } else {
                    alert('Sorry, no square there.');
                }
            } else {
                alert('Sorry, no square there.');
            }
        });
    });
});

//// Notes

// --Another way of calling randomColors for the div--
// function changeColor(event) {
//     event.target.style.backgroundColor = randomColors();

//-- Much more brief way of inserting ID
// function insertId() {
//     var id = this.id;
//     this.innerText = id;
// }

// -- Another way of handling squareCount
// function addSquare() {
//     var existingSquares = document.getElementsByClassName('square').length;
// }

// -- Double click option
//     function removeNeighbor() {
//         var id = this.id;

//             if (id % 2 === 0) {
//                 //if even, remove square after
//                 if (this.nextSibling) {
//                     this.nextSibling.remove();
//                 } else {
//                     alert('There are no elements to the right to remove.');
//                 }
//             } else {
//                 //if odd, remove square before
//                 if (this.previousSibling) {
//                     this.previousSibling.remove();
//                 } else {
//                     alert('There are no elements to the left to remove.')
//                 }
//             }
//         }




