// Psuedocoding your way through life

// 1 create a coding quiz application

// 2 Start button, has a timer, and presents questions
    // create start button
    // timer using setInterval
    // DIVs to display question, timer, and high score

// 3 answering a question move to the next question

// 4 answering the question wrong will take time off the timer

// 5 game over logic when timer reaches 0 or all questions answered

// 6 ability to save score when game is completed

// 7 high scores page to display all the scores

// **********************************************************************
// Functions
// **********************************************************************

var startQuiz = function() {
    primaryContainerEl.classList.remove("show");
    primaryContainerEl.classList.add("hide");
    
    questionContainerEl.classList.remove("hide");
    questionContainerEl.classList.add("show");
    

    showQuestion();
    countdownTimer();
};

var displayQuestion = function(index) {
    questionEl.textContent = index.question;

    for (var i = 0; i < index.answers.length; i++) {
        
    }

    var displayQuestion = document.createElement("div");


    displayQuestion.textContent = questionPool.question;

    questionEl.appendChild(displayQuestion);
};

var countdownTimer = function() {
    // define time in seconds
    let counter = 60;
    
    setInterval(function () {
        counter--; // reduce counter by 1

        if (counter >= 0) { // continue countdown if...
            timerDisplayEl.textContent = "Time Remaining: " + counter;
        }
        
        if (counter === 0) { // display
            timerDisplayEl.textContent = "The counter has finished!";
        }
    }, 1000);
};

function endQuiz(){
    // logic to end the quiz
};

// **********************************************************************
// References
// **********************************************************************
var startButtonEl = document.querySelector("#start-btn"); // references start-btn
var timerDisplayEl = document.querySelector("#timer"); // references timer
var primaryContainerEl = document.querySelector("#primary-container"); // references container 
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");

var questionIndex = 0;
var questionPool = [
    {  
        question: "Question1",
        answers: {
            answer1:"1",
            answer2:"2",
            answer3:"3",
            answer4:"4"
        },
        correct: "answer1"
    },
    {
        question:"Question2",
        answers: {
            answer1:"1",
            answer2:"2",
            answer3:"3",
            answer4:"4"
        },
        correct: "answer1"
    },
    {
        question:"Question3",
        answers: {
            answer1:"1",
            answer2:"2",
            answer3:"3",
            answer4:"4"
        },
        correct: "answer1"
    },
    {
        question:"Question4",
        answers: {
            answer1:"1",
            answer2:"2",
            answer3:"3",
            answer4:"4"
        },
        correct: "answer1"
    },
    {
        question:"Question5",
        answers: {
            answer1:"1",
            answer2:"2",
            answer3:"3",
            answer4:"4"
        },
        correct: "answer1"
    }
];

// **********************************************************************
// Event Listeners
// **********************************************************************
startButtonEl.addEventListener("click", startQuiz);