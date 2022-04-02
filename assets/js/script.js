var timerEl = document.getElementById('countdown');

var countdownTimer = function() {
    var timeLeft = 5;

    var timeInterval = setInterval(function() {
       if (timeLeft >= 0) {
           timerEl.textContent = timeLeft;
           timeLeft--;
       }
       else {
           timerEl.textConent = "";
           clearInterval(timeInterval);
       }
    }, 1000);
};

countdownTimer();