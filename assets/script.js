var data = [
    {
      question: 'What is A?',
      options: ['option 1a', 'option 2a', 'option 3a', 'option 4a'],
      answer: 2,
    },
    {
      question: 'What is B?',
      options: ['option 1b', 'option 2a', 'option 3a', 'option 4a'],
      answer: 0,
    },
    {
      question: 'What is C?',
      options: ['option 1c', 'option 2a', 'option 3a', 'option 4a'],
      answer: 1,
    },
  ];
  
  var current = 0;
  var points = 0;
  
  var qEl = document.querySelector('#question');
  var optionsEl = document.querySelector('#options');
  
  var chooseOption = function (chosen) {
    var correctOptionIndex = data[current].answer;
    var correctOption = data[current].options[correctOptionIndex];
  
    if (chosen == correctOption) {
      points += 10;
    }
    console.log(points);
  
    current++;
    optionsEl.innerHTML = '';
    putQuestion();
    putOptions();
  };
  
  var putQuestion = function () {
    qEl.textContent = data[current].question;
  };
  
  var putOptions = function () {
    var options = data[current].options;
    for (var i = 0; i < options.length; i++) {
      var option = options[i];
      var buttonEl = document.createElement('button');
      buttonEl.textContent = option;
      buttonEl.addEventListener('click', function (ev) {
        // console.log(ev.target.innerText);
        chooseOption(ev.target.innerText);
      });
      optionsEl.appendChild(buttonEl);
    }
  };
  
  putQuestion();
  putOptions();