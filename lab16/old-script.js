var $chirpButton = $('#chirp-btn');
var $chirpField = $('#chirp-field');
var $chirpList = $('#chirp-list');

$chirpField.on('input', function() {
    var isEmpty = $chirpField.val().length === 0; // essentially an if statement, returns boolean
    // if (isEmpty) {
    //     $chirpButton.prop('disabled', true);
    // } else {
    //     $chirpButton.prop('disabled', false);
    // }
    $chirpButton.prop('disabled', isEmpty); // since isEmpty is boolean, we can use it 
})
$chirpButton.click(postChirp);

function postChirp() {
    var chirp = {
        message: $chirpField.val(),
        user: 'Patrick',
        timestamp: new Date().toISOString() //when stringifying, JSON will turn it into readable but this is the tighter way of doing it.
    };
    $.ajax({
        method: 'POST',
        url: 'api/chirps',
        contentType: 'application/json',
        data: JSON.stringify(chirp)
    }).then(function(success) {
        // successful POST
        $chirpField.val(''); // Setter. Pass a blank string to the Chirp field.
        $chirpButton.prop('disabled', true);
        getChirps();
    }, function(err) {
        // err occurred
        console.log(err);
    });
}
function getChirps() {
    $.ajax({
        method: 'GET',
        url: '/api/chirps'
    }).then(function(success) {
        $chirpList.empty();
        for (var i=0; i < chirps.length; i++) {
            var $chirpDiv = $('<div class="chirp"></div>');
            var $message = $('<p></p>');
            var $user = $('<h4></h4>');
            var $timestamp = $('<h5></h5>');

            $message.text(chirps[i].message);
            $user.text(chirps[i].user);
            $timestamp.text(new Date(chirps[i].timestamp).toLocaleString());

            $message.appendTo($chirpDiv);
            $user.appendTo($chirpDiv);
            $timestamp.appendTo($chirpDiv);

            $chirpDiv.appendTo($chirpList);

        }
    }, function(err) {
        console.log(err);
    });
}

getChirps();