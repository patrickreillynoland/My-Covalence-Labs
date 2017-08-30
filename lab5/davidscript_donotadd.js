$(document).keypress(function(event) {
    event.preventDefault();
    if (!startTime) {
        startTime = event.timeStamp;
    }
});

///After iterate through all letters

if (sentenceIndex === sentence.length) {
    // end of game, compute wpm
    var endTime = event.timeStamp;
    var elapsedMinutes = (endTime - startTime) / (60 * 1000);
    var wpm = 54 / elapsedMinutes - 2 * errorCount;
    $('#feedback').text('You scored ' + wpm + ' words per minute.');
    setTimeout(function() {
        if (confirm('Would you like to play again?')) {
            sentenceIndex = 0;
            letterIndex = 0;
            currentSentence = sentences[0];
            currentLetter = currentSentence.charAt(0);
            $('sentence').text(currentSentence);
            $('#target-letter').text(currentLetter);
            $('feedback').empty();
            $("#yellow-block").css('left', '15px');
            startTime = undefined;
        }
    }, 2000); //first param = function, 2nd param = delay in ms
} else {
    // there is at least one more sentence, move on to next
    currentSentence = sentences[sentenceIndex];
    $('#sentence').text(currentSentence);
    letterIndex = 0;
    currentLetter = currentSentence.charAt(letterIndex);
    $('target-letter').text(currentLetter);
    $('yellow-block').css('left', '+=17.5px');
} else {
    //not at end of sentence
    $('target-letter').text(currentLetter);
    $('yellow-block').css('left', '15px');
}
