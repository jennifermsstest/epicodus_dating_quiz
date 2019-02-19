$(document).ready (function() {
  $('form#dating').submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var song = $("select#song").val();

    //var answer = "Cheryl Crow"
    if (gender === 'male' && age >= 30 && song === 'song1'){
      answer = "Sheryl Crow";
      celebrity = "<img src='img/sheryl.jpg'>";
    }
    else if (gender === 'male' && age < 30 && song === 'song1') {
      answer = "Cassie David"
      celebrity = "<img src='img/cassie.jpg'>"
    } else if (gender === 'female' && age <= 30 && song === 'song1') {
      answer = "Pete Davidson"
      celebrity = "<img src='img/pete.jpg'>"
   } else if (gender === 'female' && age > 30 && song === 'song1') {
      answer = "Paul McCartney"
      celebrity = "<img src='img/paul.jpg'>"
   } else if (gender === 'male' && age >= 30 && song === 'song2') {
      answer = "Jessica Simpson"
      celebrity = "<img src='img/jessica.jpg'>"
   } else if (gender === 'male' && age < 30 && song === 'song2') {
      answer = "Ariana Grande"
      celebrity = "<img src='img/ariana.jpg'>"
    } else if (gender === 'female' && age <= 30 && song === 'song2') {
     answer = "Justin Bieber"
     celebrity = "<img src='img/jb.jpg'>"
    } else if (gender === 'female' && age > 30 && song === 'song2') {
     answer = "Justin Timberlake"
     celebrity = "<img src='img/jt.jpg'>"
    }


  $("#date").text(answer);
  $("#answer").show();
  $("#celebrity").append(celebrity);
  $("#celebrity").show();


  event.preventDefault();

});
});
