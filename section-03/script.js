'use strict';
/*
// Strict mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) haveDriversLicense = true; // strict mode will show an error in the console when running the programme
if (hasDriversLicense) console.log('I can drive!');

const interface = "Audio"; // will throw "Uncaught SyntxError: Unexpected strict mode reserved word"
const private = "shh"; // as above
const if = "if"; // as above

// Functions

function logger() {
    console.log('My name is Matthew')
}

logger();
logger();
logger(); // will log 'My name is Matthew' three times

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

const describeFinland = describeCountry("Finland", 5.531, "Helsinki");
const describeScotland = describeCountry("Scotland", 5.45, "Edinburgh");
const describeItaly = describeCountry("Italy", 59.55, "Rome"); */

// Function declarations vs expressions

    // Functions Declarations

function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(1994);
console.log(age1);

    //Function Expressions

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1994);
console.log(age2);

    // Function Declarations

function percentageOfWorld1(population) {
    console.log(`${((population / 7900) * 100).toFixed(2)}% of the world population`);
}

const chinaPopulation = percentageOfWorld1(1441);
const jamaicaPopulation = percentageOfWorld1(2.961);
const japanPopulation = percentageOfWorld1(125.8)

    // Function Expressions

const worldPercentage = function (population) {
    console.log(`${((population / 7900) * 100).toFixed(2)}% of the world population`);
}

const russiaPopulation = worldPercentage(144.1);
const walesPopulation = worldPercentage(3.136);
const peruPopulation = worldPercentage(32.97);
