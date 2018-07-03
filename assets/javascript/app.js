// javascript for trivia game

// Initializing global variables
var time = 9;

var correctAnswers = 0;

var incorrectAnswers = 0;

var unansweredQuestions = 0;

var answer = ["a", "b", "c", "d"];

var userAnswer = ["", "", "", ""];

// Function to calculate results
function resultsCalculator() {
    // get userAnswer from buttons
    var userAnswerOne = $("input[name='firstQuestionAnswers']:checked").val();
    console.log(userAnswerOne);
    userAnswer.splice(0,1,userAnswerOne);
    console.log(userAnswer);

    var userAnswerTwo = $("input[name='secondQuestionAnswers']:checked").val();
    userAnswer.splice(1,1,userAnswerTwo);

    var userAnswerThree = $("input[name='thirdQuestionAnswers']:checked").val();
    userAnswer.splice(2,1,userAnswerThree);

    var userAnswerFour = $("input[name='fourthQuestionAnswers']:checked").val();
    userAnswer.splice(3,1,userAnswerFour);

    // tally up totals
    for (i=0; i < answer.length; i++) {
        if (userAnswer[i] == "") {
            unansweredQuestions++;
        }
        else if (userAnswer[i] == answer[i]) {
            correctAnswers++;
        }
        else {
            incorrectAnswers++ 
        } 
    }
}



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
        $("#submitButton").show();
    });

    // submitButton jquery function to display results 
    $("#submitButton").on("click", function () {
        gameOver();
    });
});


// function to transition to results page
function gameOver() {
    // resultsCalculator();
    clearInterval(intervalId);
    time = 9;
    resultsCalculator();
    displayText();
    console.log("reset");
    $("h2").hide();
    $("p").hide();
    $(".form-check").hide()
    $("#submitButton").hide();
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
            // uncheck radio buttons
            $("input[type=radio]").prop("checked", false) ;
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
