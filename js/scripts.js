$(document).ready (function() {
  $('form#dating').submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var song = $("select#song").val();

    //var answer = "Cheryl Crow"
    if (gender === 'male' && age >= 30 && song === 'song1'){
      answer = "Cheryl Crow"
    }
    else if (gender === 'male' && age < 30 && song === 'song1') {
      answer = "Cassie David"
    } else if (gender === 'female' && age <= 30 && song === 'song1') {
      answer = "Pete Davidson"
   } else if (gender === 'female' && age > 30 && song === 'song1') {
      answer = "Paul McCartney"
   } else if (gender === 'male' && age >= 30 && song === 'song2') {
      answer = "Jessica Simpson"
   } else if (gender === 'male' && age < 30 && song === 'song2') {
      answer = "Ariana Grande"
    } else if (gender === 'female' && age <= 30 && song === 'song2') {
     answer = "Justin Bieber"
    } else if (gender === 'female' && age > 30 && song === 'song2') {
     answer = "Justin Timberlake"
    }


  $("#date").text(answer);
  $("#answer").show();


  event.preventDefault();

});
});
