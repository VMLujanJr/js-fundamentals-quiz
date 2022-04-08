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
const startQuiz = function() {
    // hides ID introduction
    introductionEl.classList.add("hide");
    introductionEl.classList.remove("show");
    
    // shows ID display-quiz
    displayQuizEl.classList.add("show");
    displayQuizEl.classList.remove("hide");

    // store HTML output
    const output = [];

    // for each question 
    questionPool.forEach((currentQuestion, questionIndex) => { // parameters are 'currentvalue', 'index', 'array itself'
        // store possible answer choices
        const storeChoices = [];

        // for each available answer
        for (number in currentQuestion.choices) {
            // add an html radio button
            storeChoices.push(
                `
                <label class='choices'>
                <input type='radio' name='question${questionIndex}' value='${number}'>
                ${currentQuestion.choices[number]}
                </label>
                `
            );
        }

        // add this question and its answers to the output
        output.push(
        `
        <div class='question'>${currentQuestion.question}</div>
        <div class='answers'>${storeChoices.join('')}</div>
        `
        );

    quizContainerEl.innerHTML = output.join('');
    });
    
    // start counter
    countdownTimer();
};

const showResults = function() {

};

const saveQuestions = function () {
    localStorage.setItem("questions", JSON.stringify(questionPool));
}

const countdownTimer = function() {
    // define time in seconds
    let counter = 60;
    
    setInterval(function () {
        counter--; // reduce counter by 1

        if (counter >= 0) { // continue countdown if...
            displayTimerEl.textContent = "Time Remaining: " + counter;
        }
        
        if (counter === 0) { // display
            displayTimerEl.textContent = "The counter has finished!";
        }
    }, 1000);
};

// **********************************************************************
// References
// **********************************************************************
const quizContainerEl = document.getElementById("quiz");
const submitButtonEl = document.getElementById("submit");
const resultsContainerEl = document.getElementById("results");
const startButtonEl = document.getElementById("start-btn");
const introductionEl = document.getElementById("introduction");
const displayQuizEl = document.getElementById("display-quiz");
const displayTimerEl = document.getElementById("timer");
const previousEl = document.getElementById("previous");
const nextEl = document.getElementById("next");

const questionPool = [
    {  
        question: "What is the name of the statement that is used to exit or end a loop?",
        choices: {
            1:"Falter statement",
            2:"Break statement",
            3:"Conditional statement",
            4:"Close statement"
        },
        correct: 2
    },
    {
        question: "What kind of statement is used to execute actions based on a trigger or condition?",
        choices: {
            1:"Conditional statement",
            2:"Regular Expression",
            3:"Fired Event",
            4:"Boolean Variable"
        },
        correct: 1
    },
    {
        question: "This is what you call the guide that defines coding conventions for all projects.",
        choices: {
            1:"Style guide",
            2:"Coding dictionary",
            3:"Developer's reference",
            4:"Main textbook"
        },
        correct: 1
    },
    {
        question: "What are the identifiers called that cannot be used as variables or function names?",
        choices: {
            1:"Favorites",
            2:"Concrete Terms",
            3:"Constants",
            4:"Reserved Words"
        },
        correct: 4
    },
    {
        question: "JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.",
        choices: {
            1:"Show",
            2:"Output",
            3:"Display",
            4:"Speak"
        },
        correct: 2
    }
];

// **********************************************************************
// Event Listeners
// **********************************************************************
startButtonEl.addEventListener("click", startQuiz);
submitButtonEl.addEventListener("click", showResults);