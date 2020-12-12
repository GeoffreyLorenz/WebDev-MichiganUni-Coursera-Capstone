function valthis() {
var checkBoxes = document.getElementsByClassName('benefit');
var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if ( checkBoxes[i].checked ) {
            isChecked = true;
        };
    };
    if ( isChecked ) {
            document.getElementById("benefit-container").style.backgroundColor = "#eeeeee";
            alert( 'At least one checkbox checked! Unfortunately, Coursera did not teach us how to code the back-end, so you did all that for nothing :p' );
            document.getElementById('myform').reset();
          } else {
            alert( 'Please, check at least one checkbox!' );
            document.getElementById("benefit-container").style.backgroundColor = "red";
        }
      }

// from: https://stackoverflow.com/questions/32130017/form-validation-multiple-checkboxes
