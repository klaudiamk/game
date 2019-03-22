function check() {

  var question1 = document.quiz.question1;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var correct = 0;


  if (question1 == "Cinderella"){
    correct++;
  }
  if (question2.value == 1){
    correct++;
  }
  if (question3.value == 1){
    correct++;
  }
  if (question4.value == 1){
      correct++;
  }
  if (question5.value == 1){
    correct++;
  }
  if (question6.value == 1){
    correct++;
  }
  if (question7 == "Rapunzel"){
    correct++;
  }
  if (question8.value == 1){
    correct++;
  }
  if (question9 == "Snow White"){
    correct++;
  }
  if (question10 == "Olaf"){
    correct++;
  }
  var messages = ["Great job!", "That's okay.", "Better luck next time"];

  var range;

  if (correct < 2) {
    range = 2;
  }
  if (correct > 3 && correct < 7) {
    range = 1;
  }
  if (correct > 7) {
    range = 0;
  }


document.getElementById("afterSubmit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages [range];
document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";

}
