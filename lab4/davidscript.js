var button = document.createElement('button');
var buttonText = button.innerText('Add Square!');
var squareCount = 0;

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function addSquare() {
    var sq = document.createElement('div');
    sq.className = 'square';
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
            if (squareNumber % 2 === 0) {
                var bye = document.getElementById(this.id + 1);
                bye.parentNode.removeChild(bye);
            } else if (squareNumber % 2 === 1) {
                var bye = document.getElementById(this.id - 1);
                bye.parentNode.removeChild(bye);
            } else {
                alert('Sorry, no square there.')
            }
        });
    });
});