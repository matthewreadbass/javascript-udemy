/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

const firstName = 'Matthew';
console.log(firstName);

const country = 'England';
const continent = 'Europe';
let population = 68;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = true;
let language;

console.log(isIsland);
console.log(language);

language = 'English';

console.log(language);

let halfPopulation = population / 2;
console.log(halfPopulation);

population += 1;
console.log(population);

let finnlandPopulation = 6;
console.log(population > finnlandPopulation);

let averagePopulation = 33;
console.log(population < averagePopulation);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Coding Challenge #01
    // - Data 1:

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

    // - Data 2:

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

// Stirings and template literal

const firstName = 'Matthew';
const job = 'Sofware Engineer';
const birthYear = 1994;
const year = 2021;

// string concatenation
const matthewConcat = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(matthewConcat);

// template literal
const matthewTempLit = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(matthewTempLit);

// string using backticks
console.log(`Backticks aren't just for template literals`);


// if/else statements
const age = 7;

if(age >= 18) {
    console.log("You can start driving!")
} else {
    console.log(`You are too young. Wait another ${18 - age} years :(`);
}

const country = "England";
const countryPopulation = 68;
const averagePopulation = 33;

if(countryPopulation > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - countryPopulation} million below average`);
}

// Coding Challenge #02
    // - Task 1:

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;

if(markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

    // - Task 2:

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

if(markHigherBMI) {
    console.log(`Mark's BMI (${markMass}) is higher than John's (${johnMass})!`);
} else {
    console.log(`John's BMI (${johnMass}) is higher than Mark's (${markMass})!`);
}

// Type Conversion and Coercion
    // string to number
const inputYear = "1991"; // a number as a string
console.log(inputYear + 18); // returns "199118", not 2009
    // instead, do...
console.log(Number(inputYear)); // converts "1991" to a number - 1991
console.log(Number(inputYear) + 18); // returns 2009
    // number to string
console.log(String(23)); // returns "23"

console.log('9' - '5'); // return 4 (num)
console.log('19' - '13' + '17'); // return "617" (string)
console.log('19' - '13' + 17); // return 23 (num)
console.log('123' < 57); // return false
console.log(5 + 6 + '4' + 9 - 4 - 2); // return 1143 (num)

// Truthy and falsy values

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean('false')); // true

const money = 0;
if(money) {
    console.log("Don't spend it all at once");
} else {
    console.log("Get a job");
} // returns "Get a job" as money = 0, 0 = falsy, so the if statement = if(false) - therefoe the else statement is evaluated

// Equality operators
    // "strict" equality operator
const age = 18;
if (age === 18) console.log("You are old enough for a beer"); // returns true
const age2 = 18;
if (age2 === "18") console.log("You are old enough for a beer"); // returns false
    // "loose" equality operator
const age3 = 18;
if (age3 == 18) console.log("You are old enough for a beer"); // returns true
const age4 = 18;
if (age4 == "18") console.log("You are old enough for a beer"); // returns true

let numNeighbours = prompt('How many neighbour countries does your country have?');
numNeighbours = Number(numNeighbours);
if(numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders'); // without line 182, this block will always evaluate to false
} */

// Boolean Logic / Logical operators


