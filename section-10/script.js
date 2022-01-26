'use strict';

/*
A Closer Look At Functions

                // Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 80 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH125'); // {flightNum: 'LH125', numPassengers: 1, price: 80)}
createBooking('LH125', 2, 800); // {flightNum: 'LH125', numPassengers: 2, price: 800)}

                // How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const matthew = {
  name: 'Matthew Read',
  passport: 1234567890,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, matthew);
console.log(flight); // 'LH234'
console.log(matthew); // 'Mr. Matthew Read'
// one has changed, the other hasn't
// flight is a primitive datatype (string), so flightNum (line 34) is a copy of line 29,
// rather than a reference to it - line 35 flightNum is therefore a completely different
// object in memory to line 29
// all references to the matthew object (passenger/passenger.name/passenger.passport)
// point to the same object in the heap because it is a complex datatype

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(matthew); // changing passport number
checkIn(flight, matthew); // checking in - passport number has changed (complex data type)
// so newPassport has changed the original matthew object

// Passing by Value - available in JavaScript
// pass the value itself
// Passing by Reference - not available in JavaScript
// pass a reference to any value, rather than the value itself, even with primitives

                // Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, func) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);
  console.log(`Transformed by: ${func.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS callback functions are also higher-order functions
const high5 = function () {
  console.log('🙌');
};
document.body.addEventListener('click', high5);
tion[('Matthew', 'Kim', 'Harry')].forEach(high5);

                // Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey,');
greeterHey('Matthew'); // => 'Hey, Matthew'
greeterHey('Kim'); // => 'Hey, Kim'

greet('Hello,')('Harry'); // => 'Hello, Harry'

// Challenge
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Hi,')('Steve'); // => 'Hi, Steve'

                // The Call and Apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Matthew Read'); // 'Matthew Read booked a seat on Lufthansa flight LH239'
lufthansa.book(782, 'Kim Syvret'); // 'Kim Syvret booked a seat on Lufthansa flight LH782'
console.log(lufthansa.bookings); // bookings is an array of objects, each object containing
// flight num & passenger name from above .book methods

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call method
book.call(eurowings, 713, 'Steven'); // 'Steven booked a seat on Eurowings flight EW713'
console.log(eurowings.bookings); // [{flight: 'EW713', name: 'Steven'}]

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// Apply method
const flightData = [583, 'Jeremy Usborne'];
book.apply(swiss, flightData); // 'Jeremy Usborne booked a seat on Swiss Air Lines flight LX583'
console.log(swiss.bookings); // [{flight: 'LX583', name: 'Jeremy Usborne'}]

// Bind method
// book.call(eurowings, 713, 'Mark Chapman');
const bookEW = book.bind(eurowings);
bookEW(713, 'Mark Chapman'); // the .this keyword is permanently set to eurowings for this function call
//  |=> 'Mark Chapman booked a seat on Eurowings flight EW713'
console.log(eurowings.bookings); // [{flight: 'EW713', name: 'Steven'}, {flight: 'EW713', name: 'Mark Chapman'}]
// enables us to create a book function for each individual airline if we need to call the
// function multiple times for each airline - keeps code DRY

// pass in multiple arguments to be set in stone (ie. make a method for each flight number)
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Matthew Read'); // 'Matthew Read booked a seat on Eurowings flight EW23'
bookEW23('Benedict Wood'); // 'Benedict Wood booked a seat on Eurowings flight EW23'
bookEW23('Arthur Newell'); // 'Arthur Newell booked a seat on Eurowings flight EW23'
console.log(eurowings.bookings);
//  |=> [{flight: 'EW713', name: 'Steven'},
//      {flight: 'EW713', name: 'Mark Chapman'},
//      {flight: 'EW23', name: 'Matthew Read'},
//      {flight: 'EW23', name: 'Benedict Wood'},
//      {flight: 'EW23', name: 'Arthur Newell'}]
//          MRT are going on tour

// with event listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes); // => without the .bind method below,
  // .this points to the button, as the eventListener is attached to the button element
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // there is no .this keyword, so set to null
console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

// write a function that returns a function that does the same as above

const addTaxRate = function (rate) {
  // create a new function (with the consistant argument called)
  return function (value) {
    // original function returns new function
    return value + value * rate; // return value of new function
  };
};
const addVAT2 = addTaxRate(0.18); // set the constant argument (value)
// create new function addVAT - the function returned by addTaxRate
console.log(addVAT2(100)); // 118
console.log(addVAT2(27)); // 31.86

                // Coding Challenge #1  */

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

const promptText = `${poll.question}
${poll.options[0]}
${poll.options[1]}
${poll.options[2]}
${poll.options[3]}
(Write option number)`;

const displayResults = function (type) {
  if (type === 'array') {
    console.log(poll.answers);
  } else if (type === 'string') {
    console.log(
      `Poll results are ${poll.answers[0]}, ${poll.answers[1]}, ${poll.answers[2]}, ${poll.answers[3]}`
    );
  }
};

document.querySelector('.poll').addEventListener('click', function () {
  let answer = prompt(promptText);
  console.log(poll.answers.length);
  if (answer < poll.options.length) {
    poll.answers[answer]++;
  }

  displayResults('array');
  displayResults('string');
});
