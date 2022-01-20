'use strict';

/*
A Closer Look At Functions

                // Default Parameters*/

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
