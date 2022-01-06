'use strict';

// selecting score elements
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.querySelector('#score--1');
const diceElem = document.querySelector('.dice');

score0Elem.textContent = '0';
score1Elem.textContent = '0';
diceElem.classList.add('hidden');
