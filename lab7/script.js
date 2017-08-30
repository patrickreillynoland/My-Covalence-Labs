$(document).ready(function() {
    var sum = 0;
    var dice = [];
    var diceCount = 0;

    var Die = function(value) { // remove 'value' param - no need to pass value
        var count = Math.ceil(Math.random()*6); // Could replace these two lines by .prototyping roll and calling it.
        this.value = count;

        this.roll = function() { // You should .prototype this to avoid redundant creations of the function, and just call this.roll() in the block.
            this.value = Math.ceil(Math.random()*6);
            h3.innerHTML = this.value; // Could also use this.div instead of h3 for the selector.
        };

        this.div = document.createElement('div');
        this.div.className = "die";
        this.div.id = diceCount;
        //this.div.addEventListener('click', this.roll.bind(this)); -- Bind this to 
        var h3 = document.createElement('h3');
        h3.innerHTML = this.value;
        $('#dice').append(this.div);
        $(this.div).append(h3);

        /* Roll individual die by assigning 
        an id === array index and targeting it.
        If you add the remove die function, make sure
        to add method to Die to reassign Id and call it
        on the event.
        */

        $(this.div).on('click', function() {
            var id = this.getAttribute('id');
            dice[id].roll();
            // also could use .indexOf to find array index of Die that was clicked - 
            //  var index = dice.indexOf(this);
            //  dice.splice(index, 1); -- to delete it. What to cut, count.
        })
     };
    
    // Buttons 
    $('#generate').on('click', function() {
       var d = new Die;
       dice.push(d);
       diceCount++;
    });

    // Could also use:
        //document.getElementById('generate-button').addEventListener('click', function() {
        //     var d = new Die;
        // });
        // In order to use DOM instead of jQuery.

    $('#roll').on('click', function() {
       for (i = 0; i < dice.length; i++) {
           dice[i].roll();
       };
    });

    //Similar to above:
    // var rollBtn = document.getElementById('roll-button');
    // rollBtn.addEventListener('click', function() {

    // });
    

    $('#sum').on('click', function() {
        for (j = 0; j < dice.length; j++) {
            sum = sum + dice[j].value;
            // sum += dice[j].value;
        };
        alert("The sum of the dice is " + sum + ".");
        sum = 0;
    });  
});

       

