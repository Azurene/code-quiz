var timerEl = document.getElementById('countdown');
var quizEl = document.getElementById('quiz');

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


countdownTimer();