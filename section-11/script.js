'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Creating DOM Elements

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
                // Simple Array Methods

// Slice -> does not mutate array
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.slice(2); // ['c', 'd', 'e']
arr.slice(2, 4); // ['c', 'd']
arr.slice(-2); // ['d', 'e']
arr.slice(); // ['a', 'b', 'c', 'd', 'e'] => same as [...arr]

// Splice -> mutates the array
arr.splice(2); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']
// second parameter is the number of elements you want to delete

// Reverse -> mutates the array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse(); // ['f', 'g', 'h', 'i', 'j']

// Concat -> does not mutate original arrays
const letters = arr.concat(arr2); // ['a', 'b', 'f', 'g', 'h', 'i', 'j'] => same as [...arr, ...arr2]

// Join -> creates a string - doesn't mutate array
letters.join(' - '); // 'a - b - f - g - h - i - j'

                // The New at Method

const arr = [23, 11, 64];
arr.at(0); // 23
arr.at(-1); // 64 => instead of arr[arr.length - 1] / arr.slice(-1)
// useful for method chaining
// also works on strings
const myName = 'matthew';
myName.at(-1); // 'w'

              // Looping Arrays: forEach
// using banking data from above
console.log('-----FOROF-----');
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
// |=> You deposited 200
// You deposited 450
// You withdrew 400
// You deposited 3000
// You withdrew 650
// You withdrew 130
// You deposited 70
// You deposited 1300

console.log('-----FOREACH-----');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
// |=> You deposited 200
// You deposited 450
// You withdrew 400
// You deposited 3000
// You withdrew 650
// You withdrew 130
// You deposited 70
// You deposited 1300

// Using a counter
console.log('-----FOROF-COUNTER-----');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction #${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Transaction #${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
// |=> Transaction #1: You deposited 200
// Transaction #2: You deposited 450
// Transaction #3: You withdrew 400
// Transaction #4: You deposited 3000
// Transaction #5: You withdrew 650
// Transaction #6: You withdrew 130
// Transaction #7: You deposited 70
// Transaction #8: You deposited 1300

console.log('-----FOREACH-COUNTER-----');
movements.forEach(function (movement, i, arr) {
  // always has to be in order of current element, index number
  // and entire array that is being looped over
  if (movement > 0) {
    console.log(`Transaction #${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Transaction #${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// continue and break do not work in forEach statements

                // forEach with Maps and Sets
// using currencies map from above

// Maps
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// |=> USD: United States dollar 

// Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // {'USD', 'GBP', 'EUR'}
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// |=> USD: USD
// EUR: EUR
// GBP: GBP
// *****There are no keys in a set, but it is kept in the argument list for consistency*****
// Convention is to use an underscore or similar for such instances ("throwaway variables")

                // Coding Challenge #1  */

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaFixed = dogsJulia.slice(1, -2);
  const allDogs = [...juliaFixed, ...dogsKate];
  allDogs.forEach(function (age, index) {
    if (age >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
