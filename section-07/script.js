'use strict';

/*
console.log(document.querySelector('.message').textContent);

// changing values of classes from index.html
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value; // saves the guessed number to the value 'guess'
  console.log(guess); // logs guess to the console

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    // if no number given, guess evaluates to falsey
    // therefore !guess evaluates to truthy & the block will run
  }
});
