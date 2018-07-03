// javascript for trivia game


$(document).ready(function() {
    // startButton jquery function to display questions 
    $("#startButton").on("click", function() {
        console.log("click");
        $("#startButton").hide();
        $("h2").show();
        $("p").show();
        $(".form-check").show();
    });
});
