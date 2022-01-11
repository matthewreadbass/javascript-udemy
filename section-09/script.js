'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const [first, second] = restaurant.categories;
console.log(first); // will log "Italian"
console.log(second); // will log "Pizzeria"

// Access non-consecutive array elements by leaving a blank space
let [main, , secondary] = restaurant.categories;
console.log(main); // will log "Italian"
console.log(secondary); // will log "Vegetarian"

// switch array order without destructuring
const temp = main; // temp = Italian
main = secondary; // main = Vegetarian
secondary = temp; // secondary = Italian

// switch array order WITH destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // will log "Vegetarian", "Italian"

// recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // will log "Garlic Bread", "Pizza";

// accessing a nested array using destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i); // will log 2
console.log(j); // will log [5, 6]

// access individual elements in nested arrays
const [i, , [j, k]] = nested;
console.log(i); // will log 2
console.log(j); // will log 5
console.log(k); // will log 6

// set default variable values for arrays of unknown lengths
const [p, q, r] = [8, 9];
console.log(p, q, r); // will log 8, 9, undefined
// instead set default value
const [d = 1, e = 1, f = 1] = [8, 9];
console.log(d, e, f); // will log 8, 9, 1
