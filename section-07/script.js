'use strict';

/*
console.log(document.querySelector('.message').textContent);

// changing values of classes from index.html
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = function (size) {
  document.querySelector('.number').style.width = size;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // saves the guessed number to the value 'guess'
  console.log(guess); // logs guess to the console

  if (!guess) {
    // when there is no input
    displayMessage('No Number!');
    // if no number given, guess evaluates to falsey
    // therefore !guess evaluates to truthy & the block will run
  } else if (guess === secretNumber) {
    // when guess is correct
    if (score > 1) {
      displayMessage('Correct Number!');
      setBackgroundColor('#60b347');
      setNumberWidth('30rem');
      setNumber(secretNumber);
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
      }
    } else {
      displayMessage('You lost the game!');
      setBackgroundColor('#ff0000');
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game!');
      setBackgroundColor('#ff0000');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  setScore('20');
  displayMessage('Start guessing...');
  setNumber('?');
  document.querySelector('.guess').value = '';

  setBackgroundColor('#222');
  setNumberWidth('15rem');
});
