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
console.log(`Backticks aren't just for template literals`); */


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