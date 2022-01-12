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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
/*
        // Destructuring Objects

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName); // logs 'Classico Italiano'
console.log(hours); // logs thu: {...}, fri: {...}, sat: {...}}
console.log(tags); // logs ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// set default values
console.log(restaurant.menu); // undefined
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu); // [] - default value used as no restaurant property called 'menu'
console.log(starters); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
//      - default value ignored, but name still changed

// mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
{a, b} = obj; // syntax error - a & b are already defined
({a,b} = obj); // JS expects lines that start with { to be a code block - wrap in parentheses to solve
console.log(a); // will log 23
console.log(b); // will log 7

// nested objects (hours = openingHours)
const { fri } = hours;
console.log(fri); // will log {open: 11, close: 23}
const { fri: {open, close} } = hours; // access indivdual nested values
console.log(open); // will log 11
console.log(close); // will log 23
const { fri: {open: friOpen, close: friClose} } = hours; // or set new names
console.log(friOpen); // will log 11
console.log(friClose); // will log 23

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // orderDelivery function arguments does the destructuring
// will log "Order received! Garlic Bread and Risotto will be delivered to
// Via del Sole, 21 at 22:30!"

/* 
        // Destructuring Arrays
        
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

        // The Spread Operator (...)

// without the spread operator
const arr = [7, 8, 9];
const badArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// [1, 2, 3, 7, 8, 9]

// with the spread operator
const goodArr = [4, 5, 6, ...arr];
// [4, 5, 6, 7, 8, 9]

// use ... to log all individual elements of the array
console.log(...goodArr); // will log 4, 5, 6, 7, 8, 9

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']

// create a shallow copy of an array
const newMenuCopy = [...newMenu];
// ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']

// join 2 (or more) arrays together
const joinedArr = [...arr, ...badArr, ...goodArr];
// [7, 8, 9, 1, 2, 3, 7, 8, 9, 4, 5, 6, 7, 8, 9]

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 2?'),
];
console.log(ingredients);

// instead of...
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// get the same result with
restaurant.orderPasta(...ingredients);

// create a new object
const newRestaurant = { owner: 'Matthew', foundedIn: 2022, ...restaurant };

// use to create shallow copy of an object
const restaurantCopy = { ...restaurant };
// you can now change the same values in seperate objects without changing the
// corresponding value in the copied object

        // Rest pattern and parameters

// 1 - destructuring

// rest with arrays
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza); // "Pizza"
console.log(risotto); // "Risotto"
console.log(otherFood); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// rest with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {...}, fri: {...}}

// 2 - functions
const add = function (...numbers) {
  console.log(numbers); // logs input parameters in an array of indefinite length
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); // 5
add(5, 2, 7, 1); // 15
add(8, 2, 5, 3, 2, 1, 4); // 25

// using spread (in function args) & rest (add(...x)) one after another
const x = [23, 5, 7];
add(...x); // 35

restaurant.orderPizza('Mozzarella', "N'duja", 'Salame Picante');
// will output "Mozarella" ["N'duja", 'Salame Picante']
restaurant.orderPizza('Mushrooms');
// will output "Mushrooms" without an array  */

// Short Circuiting (&& and ||)

// short circuiting with the || operator
// If the first value is a truthy value, it will return that value
console.log('hello' || 'cheese'); // => 'hello'
console.log('cheese' || 'hello'); // => 'cheese'
console.log(null || 72); // => 72
console.log('false' || true); // => 'false'
console.log(false || null); // => null
console.log(undefined || 0 || '' || 'Hello' || 'world'); // => "Hello"

// practical use
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // => 10
restaurant.numGuests = 23;
console.log(guests1); // => 23

// do the same using short circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // => 23
// above will not work if the number of guests is set to 0, as 0 is a falsey value

// short circuiting with the || operator
// will return the first falsey value
// if no falsey values, will return the last value
console.log(0 && 'Matthew'); // => 0
console.log(7 && 'Matthew'); // => "Matthew"
console.log('hello' && 23 && null && 'Matthew'); // => null

// practical use
// if .orderPizza exists, order a pizza with mushrooms and salami
// otherwise do nothing
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'salami');
}

// with short circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'salami');
// if .orderPizza exists, the last value (ordering a pizza) will evaluate
// if not, nothing will happen
