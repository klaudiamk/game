function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (question1 == "snow white" || "Snow White" || "Snow white" || "snow White"){
    correct++;
  }
  if (question2 == "Yellow"){
    correct++;
  }
  if (question3 == "5 dozen eggs"){
    correct++;
  }

  var messages = ["Great job!", "That's okay.", "Better luck next time"];

  var range;

  if (correct < 1) {
    range = 2;
  }
  if (correct > 0 && correct < 3) {
    range = 1;
  }
  if (correct > 2) {
    range = 0;
  }

document.getElementById("afterSubmit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages [range];
document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";

}
