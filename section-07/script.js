'use strict';

/*
console.log(document.querySelector('.message').textContent);

// changing values of classes from index.html
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // saves the guessed number to the value 'guess'
  console.log(guess); // logs guess to the console

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    // if no number given, guess evaluates to falsey
    // therefore !guess evaluates to truthy & the block will run
  } else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Correct Number!';
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
});
