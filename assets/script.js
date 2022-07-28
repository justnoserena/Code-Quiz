// var startCard = document.getElementById("start-page");
var startBtn =document.getElementsByClassName ("start-btn");
var quiz = document.getElementsByClassName("quiz-ctn");
var questions = document.getElementsByClassName("question-ctn");
var options = document.getElementsByClassName("option-ctn");

var questions = [{
    number: 1,
    question:"What does HTML stand for?",
    options: ["Hotmail","HyperText Markup Language","Home Tool Markup Language","Hyperlinks and Text Markup Language"],
    correct:"HyperText Markup Language",
},
{
    number: 2,
    question:"What is an object?",
    options: ["A type of variable","A type of array","A type of function","All of the above"],
    correct:"All of the above",
},
{
    number: 3,
    question:"quest 3",
    options: ["1w","2w","3w"],
    correct: "1c",
},
{
    number: 4,
    question:"quest 4",
    options: ["1w","2w","3w"],
    correct: "1c",
},
{
    number: 5,
    question:"quest 5",
    options: ["1w","2w","3w"],
    correct: "1c",
}];


startBtn.onClick = startQuiz();
