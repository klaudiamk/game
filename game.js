function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var question11 = document.quiz.question11.value;
  var question12 = document.quiz.question12.value;
  var question13 = document.quiz.question13.value;
  var question14 = document.quiz.question14.value;
  var question15 = document.quiz.question15.value;
  var question16 = document.quiz.question16.value;
  var question17 = document.quiz.question17.value;
  var question18 = document.quiz.question18.value;
  var question19 = document.quiz.question19.value;
  var question20 = document.quiz.question20.value;
  var correct = 0;

question1 = question1.toUpperCase();
question7 = question7.toUpperCase();
question9 = question9.toUpperCase();
question10 = question10.toUpperCase();
  if (question1 == "RAPUNZEL"){
    correct++;
  }
  if (question2 == 1){
    correct++;
  }
  if (question3 == 1){
    correct++;
  }
  if (question4 == 1){
      correct++;
  }
  if (question5 == 1){
    correct++;
  }
  if (question6 == 1){
    correct++;
  }
  if (question7 == "RAPUNZEL"){
    correct++;
  }
  if (question8 == 1){
    correct++;
  }
  if (question9 == "SNOW WHITE"){
    correct++;
  }
  if (question10 == "OLAF"){
    correct++;
  }
  if (question11 == 1){
    correct++;
  }
  if (question12 == 1){
    correct++;
  }
  if (question13 == 1){
    correct++;
  }
  if (question14 == 1){
    correct++;
  }
  if (question15 == 1){
    correct++;
  }
  if (question16 == 1){
    correct++;
  }
  if (question17 == 1){
    correct++;
  }
  if (question18 == 1){
    correct++;
  }
  if (question19 == 1){
    correct++;
  }
  if (question20 == 1){
    correct++;
  }



  var messages = ["Excellent!", "Great job!", "Good job!", "Good effort.", "Better luck next time."];

  var range;

if (correct <= 5) {
  range = 4;
} else if (correct < 9) {
  range = 3;
} else if (correct < 12) {
  range = 2;
} else if (correct < 16) {
  range = 1;
} else {
  range = 0;
}

document.getElementById("afterSubmit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages [range];
document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";

}

function reset() {

}
