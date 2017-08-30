$(document).ready(function () {
    var iSent = 0;
    var iLet = 0;
    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

// Add sentences and next key up top
    var currentSent = sentences[iSent];
    $('#sentence').text(currentSent);
    var currentLet = currentSent.charAt(iLet);
    $('#target-letter').text(currentLet);


// Switch keyboards on Shift
    $("#keyboard-upper-container").hide();
    $('body').keydown(function(shift){
      if(shift.which==16){
          $("#keyboard-lower-container").hide();
          $("#keyboard-upper-container").show();
          $('body').keyup(function(shift){
                if(shift.which==16){
                    $("#keyboard-lower-container").show();
                    $("#keyboard-upper-container").hide();
                };
          });
    }});

// Highlight pressed letter key
    $('body').on('keydown', function(e){
        var upperKey = e.keyCode;
        var lowerKey = e.keyCode + 32;
        if (e.shiftKey){
            $('#' + upperKey).addClass('active-key');
            $('body').on('keyup', function(){
                $('#' + upperKey).removeClass('active-key');
            });

        } else {
            $('#' + lowerKey).addClass('active-key');
            $('body').on('keyup', function(){
                $('#' + lowerKey).removeClass('active-key');
            });
        }
    });


        // Figure out what key was hit
        var c = currentLet.charCodeAt(0);
        $(document).on('keyup', function(f) {
            if (f.shiftKey) {
                if ((f.which) === c) {
                    $('#feedback').append(" <span class='glyphicon glyphicon-ok'></span>");
                    iLet++;
                } else if ((f.which) === 16) {
                return;
                } else {
                    $('#feedback').append(" <span class='glyphicon glyphicon-remove'></span>");
                }
            } else {
                if ((f.which + 32) === c) {
                    $('#feedback').append(" <span class='glyphicon glyphicon-ok'></span>");
                    iLet++;
                    console.log(iLet);
                } else {
                    $('#feedback').append(" <span class='glyphicon glyphicon-remove'></span>");
                }
            }
        
    
        });
    });

       

