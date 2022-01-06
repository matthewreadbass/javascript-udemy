'use strict';

// selecting score elements
const score0Elem = document.getElementById('score--0');
const score1Elem = document.getElementById('score--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');
const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0Elem.textContent = '0';
score1Elem.textContent = '0';
diceElem.classList.add('hidden');

// scores
let currentScore = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // generate number
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display dice
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;
  //check if 1 rolled (if true, switch player)
  if (dice !== 1) {
    currentScore += dice;
    current0Elem.textContent = currentScore;
  } else {
  }
});
