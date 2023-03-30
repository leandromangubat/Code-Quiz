var data = [
    {
      question: 'Which one of the following is NOT not a programming language?',
      options: ['A) Python', 'B) HTML', 'C) Android', 'D) JavaScript'],
      answer: 2,
    },
    {
      question: 'Which of the following creates space inside a box model?',
      options: ['A) Padding', 'B) Margin', 'C) Border', 'D) All of the above'],
      answer: 0,
    },
    {
      question: 'What does API stand for?',
      options: ['A) Automated Program Initiate', 'B) Application Programming Interface', 'C) Apple Pod Index', 'D) None of the above'],
      answer: 1,
    },
  ]



  var current = 0;
  var points = 0;
  var timerEl = document.querySelector('#timeLeft');
 
  var time= 0;
  var timer = '';
 // Timer
 function setTime(){
    timer = setInterval(function(){
    time--;
    timerEl.textContent = "Timer: " + time;

  // check if user ran out of time
  if (time === 0) {
    quizEnd();
    }
  }, 1000);
 }

  var qEl = document.querySelector('#questions');
  var optionsEl = document.querySelector('#options');
  var startBtn = document.querySelector('#start');
  var scoreEl = document.querySelector('#score');
  var nameInput = document.querySelector('#input-container');
  
  nameInput.setAttribute('style', 'display: none;');
  startBtn.addEventListener('click', startQuiz);
//Starts the quiz/ Resets after finishing
function startQuiz(){
    optionsEl.textContent = '';
    current = 0;
    time = 60;
    setTime ();
    putQuestion();
    putOptions()
    points = 0;
    scoreEl.textContent = 'Score: '+ points;
    optionsEl.setAttribute('style', '');
    nameInput.setAttribute('style', 'display: none;');
    
}
// Verifies answer
  var chooseOption = function (chosen) {
    var correctOptionIndex = data[current].answer;
    var correctOption = data[current].options[correctOptionIndex];
  
    if (chosen == correctOption) {
      points += 10;
    }
    //-10 sec penalty for wrong answer
    else{
        time -= 10;
    }
    console.log(points);
    scoreEl.innerHTML = 'Score: '+ points;
  
    current++;
    optionsEl.innerHTML = '';
    putQuestion();
    putOptions();
  };
 
//Displays question  
var putQuestion = function () {
    
    if(current == data.length){
        quizEnd();
    }
    else{
    qEl.textContent = data[current].question;
    }
};

//Displays options
var putOptions = function () {
    var options = data[current].options;
    for (var i = 0; i < options.length; i++) {
      var option = options[i];
      var buttonEl = document.createElement('div');
      buttonEl.textContent = option;
      buttonEl.addEventListener('click', function (ev) {
        console.log("event target value", ev.target.innerText);
        chooseOption(ev.target.innerText);
      });
      optionsEl.appendChild(buttonEl);
    }
    
};    

//Ends the quiz
function quizEnd(){
    qEl.textContent = '';
    //Clears the timer
    clearInterval(timer);
    //Asks user if they want to try again
    qEl.append(startBtn);
    startBtn.textContent = "Click to try again";
    //Presents user with their score displaying in the center of the page
    optionsEl.textContent ="Your Score: " + points;
    optionsEl.setAttribute('style', 'display: flex; justify-content: center;');
    nameInput.setAttribute('style', '');

    // Hide question section

    // create input element, also add a button element

    // on click of a button get input value, get a score, and save it to localStorage
    var initialsEl = document.getElementById("initials");
    var initials = initialsEl.value.trim(); 

  
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem('highscores')) || [];

    // format new score object for current user
    var newScore = {
      score: points,
      initials: initials,
    };

    

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));
    
    var subButton = document.querySelector('#subButton');
    subButton.addEventListener('click', logScore);
};

function logScore(){
            
            scoreBoard.textContent = highscores; 
};

//   var x= 5;
//   var z =10;
//   function countSum(a,b){
//     return a+b;
//   }

//   countSum(x,z)