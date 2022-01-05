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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // saves the guessed number to the value 'guess'
  console.log(guess); // logs guess to the console

  if (!guess) {
    // when there is no input
    document.querySelector('.message').textContent = 'No Number!';
    // if no number given, guess evaluates to falsey
    // therefore !guess evaluates to truthy & the block will run
  } else if (guess === secretNumber) {
    // when guess is correct
    if (score > 1) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      highscore = parseInt(document.querySelector('.highscore').textContent);
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
