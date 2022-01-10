'use strict';

/* function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `You are also a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
  }
  // console.log(millenial) => will work, as only let/const are block scoped, not var
  printAge();
  return age;
}

    // Hoisting and TDZ in practice

const firstName = 'Matthew';
calcAge(1994);
const a = 72;
let b = 83;

console.log(me); // undefined - Variables declared with var are hoisted as undefined until they are declared later
console.log(job); // cannot access let variables before they are declared (TDZ)
console.log(birthYear); // cannot access const variables before they are declared (TDZ)

var me = 'Matthew';
let job = 'Developer';
const birthYear = 1994;

console.log(addDecl(2, 3)); // Will output 5 - function calls are hoisted
console.log(addExpr(2, 3)); // Cannot access const variables before they are declared (TDZ)
console.log(addArrow(2, 3)); // addArrow is not a function (is undefined before line being defined)

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts); // will log undefined
if (!numProducts) deleteShoppingCart; // will delete shopping cart even though numProducts has been declared below as 10

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1; // will create a property on the window object
let y = 2; // will not create a property on the window object
const z = 3; // will not create a property on the window object  */

// The this Keywords

console.log(this); // points to the window object

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(1994); // logs undefined (in strict mode -> the global object in sloppy mode)

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArrow(1994); // logs the window object - the arrow function does not get its own arrow function
// Instead it uses the this keyword of its parents scope (window in this case)

const matthew = {
  year: 1994,
  calcAge: function () {
    console.log(2021 - this.year);
  },
};
matthew.calcAge(); // logs the 'matthew' object
// you can therefore use the this keyword inside the object to access other values inside the object

const matilda = {
  year: 2006,
};

matilda.calcAge = matthew.calcAge; // matilda object borrows the method from the matthew object
matilda.calcAge(); // this now points to matilda
// the this in the matthew object will still point to the matilda object if called by matilda
