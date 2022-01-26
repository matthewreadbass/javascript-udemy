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

                // Functions Accepting Callback Functions  */

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
