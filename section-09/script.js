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
({a, b} = obj); // JS expects lines that start with { to be a code block - wrap in parentheses to solve
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
// will output "Mushrooms" without an array

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

        // The Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // => 10
// the above should be 0 however, as .numGuests does exist and that is
// what this function is checking for. 0 is considered falsey

const guests3 = restaurant.numGuests ?? 10;
console.log(guests3); // => 0

        // Logical Assignment Operators

const rest1 = {
  name: 'Cheesey Explosion',
  numGuests: 20,
};

const rest2 = {
  name: "Food 'n' Stuff",
  owner: 'Ron Swanson',
};

// adding a default numGuests property to all restaurant objects
// that don't have one
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
// added a numGuests property to rest2, but not rest1

// doing the above with the OR Assignment Operator
rest1.numGuests ||= 10; // => rest1.numGuests = 20
rest2.numGuests ||= 10; // => rest2.numGuests = 10

// Logical OR Assignment Operator Doesn't work if a value is 0 (as with short circuiting)
// Use the Logical Nullish Assignment Operator to solve this
rest1.numGuests = 0;
rest1.numGuests ??= 10; // => rest1.numGuests = 0
rest2.numGuests ??= 10; // => rest2.numGuests = 10

// Logical AND Assignment Opertor can replace values if they exist
rest1.owner &&= '<Anonymous>'; // undefined
// rest1.owner does not exist, so nothing happens
rest2.owner &&= '<Anonymous>'; // '<Anonymous>'
// rest2.owner does exist, so it is replaced

        // Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(players.length);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

        // Looping Arrays - The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// will individually log each element from the menu

for (const item of menu.entries()) {
  console.log(item);
} // will log each element in an individual array with it's index number

// possible to use destructuring in for-of loop call
for (const [index, elem] of menu.entries()) {
  console.log(`${item[index + 1]}: ${elem}`);
} // will log:
//      1: Focaccia
//      2: Bruschetta
//      3: Garlic Bread
//      4: Caprese Salad
//      5: Pizza
//      6: Pasta
//      7: Risotto

        // Enhanced Object Literals

const hobbies = {
  music: 'yes please',
  gym: "you're alright thanks mate",
};

const me = {
  name: 'Matthew',
  age: 27,
  job: 'Software Engineer',
  hobbies,
};

console.log(me);
//    {name: 'Matthew'
//      age: 27
//      job: 'Software Engineer'
//      hobbies: {
//        music: 'yes please'
//        gym: "you're alright thanks mate"
//      }
//    };

// Can write functions inside Objects without the function keyword

const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },
};

// compute property names instead of writing them out manually/literally
const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

        // Optional Chaining (?.)

// instead of
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
} // if restaurant opens on monday, log Monday opening hours
//        |=> pretty long-winded
//        |=> restaurant may not have a .openingHours function
//        |=> will return an error if one of the methods doens't exist

// use optional chaining...
console.log(restaurant.openingHours.mon?.open);
// .open will only be read if .mon exists (0 / '' DO exist)
// otherwise will return undefined

// can chain multiple Optional Chaining operators
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// use to check if a method exists
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// returns ["Focaccia", "Pasta"];
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
// returns 'Method does not exist'
// restaurant.orderRisotto?.(0, 1) evaluates to undefined, so the nullish
// coalescing operator evaluates to false and logs the specified string

// use to check if an array is empty
const usersEmpty = [];
const users = [{ name: 'Matthew' }];
console.log(usersEmpty[0]?.name ?? 'User array empty');
//      |=> 'User array empty'
console.log(users[0]?.name ?? 'User array empty');
//      |=> 'Matthew'

        // Looping Objects: Object Keys, Values and Entries

//looping over property keys
// use the for-of loop to loop over an array, not the objet itself
const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const properties = Object.keys(openingHours);
console.log(properties); // ["thu", "fri", "sat"]

console.log(`We are open on ${properties.length} days`); // (3 days)

let openStr = `We are open on ${properties.length} days: `;
//creating a string that you will concaternate below
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr); // 'We are open on 3 days: thu, fri, sat,'

// looping over values
const values = Object.values(openingHours);
console.log(values); // [{...}, {...}, {...}]

// looping over keys and values together
const entries = Object.entries(openingHours);
console.log(entries); // [['thu', {...}], ['fri', {...}], ['sat', {...}]]

for (const [key {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} // "On thu we open at 12 and close at 22" etc.

        // Coding Challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

let averageOdd = 0;
for (const odd of Object.values(game.odds)) {
  averageOdd += odd;
}
console.log(averageOdd / Object.values(game.odds).length);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const scorers = {};
for (const goal of game.scored) {
  scorers[goal] = scorers[goal] ? scorers[goal] + 1 : 1;
}
console.log(scorers);

        // Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}
console.log(new Set('Matthew')); // Set(6) {'M', 'a', 't', 'h', 'e', 'w'}
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread'); // {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
ordersSet.delete('Risotto'); // {'Pasta', 'Pizza', 'Garlic Bread'}
// ordersSet.clear() // {}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// how many different positions are there?
console.log(new Set(staff).size);
// what are they?
// convert in to an array using the spread operator
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']

        // Maps: Fundamentals

// create an empty map
const rest = new Map();
// populate the map using the .set method
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// return values using .get and passing the key in as the argument
console.log(rest.get('name')); // 'Classico Italiano'
// .set both logs and updates the map
console.log(rest.set(2, 'Lisbon, Portugal'));
//    |=> Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

// because .set returns the updated map, we can chain set methods
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name')); // 'Classico Italiano'
console.log(rest.get(true)); // 'We are open'

const time = 21;
console.log(rest.get(time > rest.get(open) && time < rest.get('close')));
//    |=> 'We are open'
// time > rest.get('open') && time < rest.get('close') === true
// rest.get(true) === 'We are open'

// check if a map has a key
rest.has('categories'); // true

// delete map elements using the key
rest.delete(2); // deletes {2 => 'Lisbon, Portugal'}

rest.size; // shows how many objects in the map
// newMap.clear(); // empties the map

// when using an array as a key, it has to be defined before use
rest.set(['an', 'array'], 'array');
console.log(rest.get(['an', 'array'])); // undefined
// the arrays on the above two lines are two seperate arrays in memory
// instead try...
arr = ['an', 'array'];
rest.set(arr, 'array');
console.log(rest.get(arr)); // 'array'

        // Maps: Iteration

// instead of .set
const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);
// the above is the same array structure as is returned when
// calling Object.entries()
// Use this ^ to convert objects to maps

const hoursMap = new Map(Object.entries(restaurant.openingHours));
// converts restaurant.openingHours object to a map
console.log(hoursMap);

// using a for loop to iterate over a map
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer:'));
console.log(
  question.get('correct') === answer ? question.get(true) : question.get(false)
);

// converting maps to arrays
const questionArr = [...question];
console.log(questionArr);
// map methods also available
console.log([...questionArr.keys()]);
console.log([...questionArr.values()]);

        // Coding Challenge #3

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
} */

// Working with Strings

// Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // 'A'
console.log(plane[1]); // '3'
console.log(plane[2]); // '2'
console.log(plane[3]); // '0'

console.log('B737'[2]); // 3

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 7
console.log(airline.lastIndexOf('r')); // 11
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1
//    |=> .indexOf is case sensitive
//    |=> -1 means it doesn't exist

console.log(airline.slice(4)); // 'Air Portugal'
//    |=> 'sub-string' - a part of the original string
//    |=> strings are imutable as they are a primitive datatype
//    |=> .slice does not mutate the original string

console.log(airline.slice(4, 7)); // 'Air'

console.log(airline.slice(0, airline.indexOf(' '))); // 'TAP'
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // 'Portugal'

console.log(airline.slice(-2)); // 'al'

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('Unlucky!');
  } else console.log('Lucky you!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toUpperCase()); // 'TAP AIR PORTUGAL'
console.log(airline.toLowerCase()); // 'tap air portugal'

// fix capitalisation in name
const fixedCapitals = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  return passengerLower[0].toUpperCase() + passengerLower.slice(1);
};
console.log(fixedCapitals('mAtthew'));

// comparing emails
const compareEmails = function (email1, email2) {
  const normalisedEmail1 = email1.toLowerCase().trim();
  const normalisedEmail2 = email2.toLowerCase().trim();
  return normalisedEmail1 === normalisedEmail2;
};
console.log(compareEmails('matthew@myemail.org', '   Matthew@MyEmail.org \n'));

// replacing
const priceGB = '£78.00';
const priceGer = priceGB.replace('£', '€').replace('.', ','); // '€78,00'

const announcement =
  "All passengers come to boarding door 23. That's boarding door 23!";

console.log(announcement.replace('door', 'gate'));
//    |=> "All passengers come to boarding gate 23. That's boarding door 23!"
//    |=> only replaces the first instance
console.log(announcement.replaceAll('door', 'gate'));
//    |=> "All passengers come to boarding gate 23. That's boarding gate 23!"
//    |=> replaces all, surprisingly

const airplane = 'Airbus A320';
console.log(airplane.includes('A320')); // true
console.log(airplane.includes('Boeing')); // false
console.log(airplane.startsWith('Airb')); // true
console.log(airplane.endsWith('10')); // false

if (airplane.startsWith('Airbus') && airplane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome on board');
  }
};

checkBaggage('I have a laptop, some Food and a Pocket Knife'); // 'You are NOT allowed on board'
checkBaggage('Socks and Camera'); // 'Welcome on board'
checkBaggage('snacks and a gun'); // 'You are NOT allowed on board'

console.log('Matthew Read'.split(' ')); // ['Matthew', 'Read']

const [firstName, lastName] = 'Matthew Read'.split(' ');
console.log(firstName); // 'Matthew'
console.log(lastName); // 'Read'

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // 'Mr. Matthew READ'

const capitaliseName = function (name) {
  const namesArr = name.split(' ');
  const namesUpper = [];
  for (const n of namesArr) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitaliseName('jessica ann smith davis');

const capitaliseNameAlt = function (name) {
  const namesArr = name.split(' ');
  const namesUpper = [];
  for (const n of namesArr) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitaliseNameAlt('jonas schmedtmann');

const maskCreditCard = function (number) {
  const str = number + ''; // shorthand way of converting a number to a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(73048972)); // '****8972'

const badWeatherMessage = 'Bad weather... All departures delayed ';
console.log(badWeatherMessage.repeat(10));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
