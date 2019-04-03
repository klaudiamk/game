
let correct = 0;
let question = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function editValues() {

  correct = 0;
  question[1] = document.quiz.question1.value;
  question[2] = document.quiz.question2.value;
  question[3] = document.quiz.question3.value;
  question[4] = document.quiz.question4.value;
  question[5] = document.quiz.question5.value;
  question[6] = document.quiz.question6.value;
  question[7] = document.quiz.question7.value;
  question[8] = document.quiz.question8.value;
  question[9] = document.quiz.question9.value;
  question[10] = document.quiz.question10.value;
  question[11] = document.quiz.question11.value;
  question[12] = document.quiz.question12.value;
  question[13] = document.quiz.question13.value;
  question[14] = document.quiz.question14.value;
  question[15] = document.quiz.question15.value;
  question[16] = document.quiz.question16.value;
  question[17] = document.quiz.question17.value;
  question[18] = document.quiz.question18.value;
  question[19] = document.quiz.question19.value;
  question[20] = document.quiz.question20.value;

}

function check() {

  question[1] = question[1].toUpperCase();
  question[7] = question[7].toUpperCase();
  question[9] = question[9].toUpperCase();
  question[10] = question[10].toUpperCase();
  if (question[1] == "RAPUNZEL"){
    question[1] = 1;
  }
  if (question[7] == "RAPUNZEL"){
    question[7] = 1;
  }
  if (question[9] == "SNOW WHITE"){
    question[9] = 1;
  }
  if (question[10] == "OLAF"){
    question[10] = 1;
  }

  for (let x = 1; x <= 20; x++) {
    if (question[x] == 1) {
      correct++
    }
  }

}

function right() {

editValues();
check();

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
