'use strict';

// selecting score elements
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // generate number
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display dice
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;
  //check if 1 rolled
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Elem.classList.toggle('player--active');
    player1Elem.classList.toggle('player--active');
  }
});
