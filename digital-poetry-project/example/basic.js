var firstSentence = "Hello cats";
var secondSentence = "Hello dogs";

var wordContainer = document.getElementById('word-container');

var numberOfTimesPressed = 0;

var updateWords = function() {
  if (numberOfTimesPressed === 0) {
    wordContainer.innerHTML = firstSentence;    
  } else {
    wordContainer.innerHTML = secondSentence;
  }
  numberOfTimesPressed = numberOfTimesPressed + 1;
};

document.addEventListener('keypress', updateWords);
