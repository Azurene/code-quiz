var timerEl = document.getElementById('countdown');
var quizEl = document.getElementById('quiz');
var startButtonEl = document.getElementById('start');
var questionEl = document.getElementById('question');
var quizAnswers = document.getElementById('answers');

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ___.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

// function to start quiz
var startQuiz = function() {
    countdownTimer();
    quizQuestions();
};

// function for the timer
var countdownTimer = function() {
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
       if (timeLeft >= 0) {
           timerEl.textContent = timeLeft;
           timeLeft--;
       }
       else {
           timerEl.textContent = "Time's Up!";
           clearInterval(timeInterval);
       }
    }, 1000);
};

var quizQuestions = function() {
    questionEl.innerHTML = "";
    quizAnswers.innerHTML = "";
    // hide start button
    startButtonEl.style.visibility = "hidden";
    var questionIndex = 0;
    // For loop through array
    for (var i = 0; i < questions.length; i++) {
        var quizQuestion = questions[questionIndex].question;
        var quizChoices = questions[questionIndex].choices;
        questionEl.textContent = quizQuestion;
        console.log(quizQuestion);
    }
    quizChoices.forEach(function(newOption) {
        var answerList = document.createElement("li");
        answerList.textContent = newOption;
        quizAnswers.appendChild(answerList);
        answerList.addEventListener("click", (selectAnswer));
    });
}

var selectAnswer = function(event) {
    var element = event.target;
    var feedbackElement = document.createElement("li");
    var questionIndex = 0; 
    if (element.matches("li")) {
        if (element.textContent === questions[questionIndex].answer) {
            // correct answer
            // score++;
            feedbackElement.textContent = "Correct!";
            quizAnswers.appendChild(feedbackElement);
        } else {
            
        }
    }
    questionIndex++

    if (questionIndex >= questions.length) {
        console.log("done");
    } else (questionIndex);
    
}

startButtonEl.addEventListener('click', startQuiz)