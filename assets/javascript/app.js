// javascript for trivia game

// Initializing global variables
var time = 9;

var correctAnswers = 0;

var incorrectAnswers = 0;

var unansweredQuestions = 4;

var answer = ["a", "b", "c", "d"];

$(document).ready(function () {
    // startButton jquery function to display questions 
    $("#startButton").on("click", function () {
        console.log("click");
        // setTimeout(function () { gameOver(); }, 15000);
        intervalId = setInterval(window.timer, 1000);
        timer();
        $("#startButton").hide();
        $("h2").show();
        $("p").show();
        $("#results").hide();
        $(".form-check").show();
    });
});

// function resultsCalculator() {
//     $(document).ready(function () {
//         var firstQuestion = $("input[name='firstQuestionAnswers']:checked").val();
//         if (firstQuestion !==1 || 2 || 3 || 4) {
//             return
//         }
//         else if (firstQuestion == answer[0]) {
//             correctAnswers++;
//             unansweredQuestions--;
//         }
//         else {
//             incorrectAnswer--;
//             unansweredQuestions--;
//         }

//         var secondQuestion = $("input[name='secondQuestionAnswers']:checked").val();
//         if (secondQuestion !==1 || 2 || 3 || 4) {
//             return
//         }
//         else if (secondQuestion == answer[1]) {
//             correctAnswers++;
//             unansweredQuestions--;
//         }
//         else {
//             incorrectAnswer--;
//             unansweredQuestions--;
//         }

//         var thirdQuestion = $("input[name='thirdQuestionAnswers']:checked").val();
//         if (thirdQuestion !==1 || 2 || 3 || 4) {
//             return
//         }
//         else if (thirdQuestion == answer[2]) {
//             correctAnswers++;
//             unansweredQuestions--;
//         }
//         else {
//             incorrectAnswer--;
//             unansweredQuestions--;
//         }

//         var fourthQuestion = $("input[name='fourthQuestionAnswers']:checked").val();
//         if (fourthQuestion !==1 || 2 || 3 || 4) {
//             return
//         }
//         else if (fourthQuestion == answer[3]) {
//             correctAnswers++;
//             unansweredQuestions--;
//         }
//         else {
//             incorrectAnswer--;
//             unansweredQuestions--;
//         }
//     });
// }




// function to transition to results page
function gameOver() {
    // resultsCalculator();
    clearInterval(intervalId);
    time = 9;
    displayText();
    console.log("reset");
    $("h2").hide();
    $("p").hide();
    $(".form-check").hide()
    $("#results").show();
    $("#resetButton").show();

    // onclick function to reset game
    $(document).ready(function () {

        // startButton jquery function to display intro 
        $("#resetButton").on("click", function () {
            console.log("reset");
            $("#startButton").show();
            $("#results").hide();
            $("#resetButton").hide();
        });
    });
}

// function to display the results when time is up
function displayText() {
    $("#results").html(
        "CORRECT ANSWERS: " + correctAnswers +
        "<br>INCORRECT ANSWERS: " + incorrectAnswers +
        "<br>UNANSWERED QUESTIONS: " + unansweredQuestions
    );
}
function timer() {
    // intervalId = setInterval(window.timer, 1000);
    time--;
    $("#timer").html(time);
    if (time == 0) {
        gameOver();
    } 
}
