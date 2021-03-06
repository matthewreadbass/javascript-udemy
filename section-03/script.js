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
const describeItaly = describeCountry("Italy", 59.55, "Rome");

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

const percentageOfWorld2 = function (population) {
    console.log(`${((population / 7900) * 100).toFixed(2)}% of the world population`);
}

const russiaPopulation = percentageOfWorld2(144.1);
const walesPopulation = percentageOfWorld2(3.136);
const peruPopulation = percentageOfWorld2(32.97);

// Arrow Functions

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

    // with a block

const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1994));

    // with a block and multiple arguments

    const yearsUntilRetirement2 = (birthYear, firstName) => {
        const age = 2021 - birthYear;
        const retirement = 65 - age;
        return `${firstName} retires in ${retirement} years`;
    }
    
console.log(yearsUntilRetirement2(1987, 'Kim'));

const percentageOfWorld3 = population => console.log(`${((population / 7900) * 100).toFixed(2)}% of the world population`);

const estoniaPopulation = percentageOfWorld3(1.331);
const albaniaPopulation = percentageOfWorld3(2.838);
const macedoniaPopulation = percentageOfWorld3(2.083);

// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

function percentageOfWorld4(population) {
    return ((population / 7900) * 100).toFixed(2);
}

function describePopulation(country, population) {
    console.log(`${country} has ${population} million people, which is about ${percentageOfWorld4(population)}% of the world.`);
}

const americaPopulation = describePopulation("America", 329.5);
const canadaPopulation = describePopulation("Canada", 38.01);
const mexicoPopulation = describePopulation("Mexico", 128.9);

// Reviewing Functions

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const retirement = 65 - calcAge(1994)
    return retirement > 0 ? `${firstName} retires in ${retirement} years` : `${firstName} has already retired...` ;
}

console.log(yearsUntilRetirement(1994, "Matthew"));
console.log(yearsUntilRetirement(1954, "Arnold"));

// Coding Challenge #01

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins")
    }
}

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// Introduction To Arrays

const friends = ["Michael", "Steven", "Peter"];
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(years[2]);

console.log(friends.length);
console.log(years[years.length - 1]);

friends[2] = "Kim"; // replaces Peter with Kim

const calcAge5 = function (birthYear) {
    return 2021 - birthYear;
}
const years2 = [1990, 1967, 2002, 2010, 2018];
const years3 = [calcAge5(years2[0]), calcAge5(years2[1]), calcAge5([years2.length - 1])]
console.log(years3);

function percentageOfWorld5(population) {
    return ((population / 7900) * 100).toFixed(2);
}

const populations = [32, 74, 2.79, 46];
console.log(populations.length === 4);
const percentages = [percentageOfWorld5(populations[0]), 
    percentageOfWorld5(populations[1]), percentageOfWorld5(populations[2]),
    percentageOfWorld5(populations[3])];
console.log(percentages);

// Basic Array Operations (Methods)

const friends = ["Michael", "Steven", "Peter"];
friends.push("Kim"); // adds "Kim" to the end of the array
console.log(friends); // returns ["Michael", "Steven", "Peter", "Kim"]
const newLength = friends.push("Harry") // will save the length of the newly mutated array

friends.unshift("Tom"); // adds "Tom" to the beginning of the array

friends.pop(); // removes the last element of the array
const popped = friends.pop(); // will store the removed array element

friends.shift(); // removes the last element of the array

console.log(friends.indexOf("Steven")); // will return index number of "Steven"
console.log(friends.includes("Brian")); // will return false

const neighbours = ["Ireland", "Scotland", "Wales"];
neighbours.push("Utopia");
neighbours.pop();

if (neighbours.includes("Germany") === false) {
    console.log('Probably not a central European country :D');
}

neighbours[0] = "The Island of Ireland";
console.log(neighbours);

// Coding Challenge #02

const calcTip = function(bills) {
    let i = 0
    const tips = [];
    const total = [];
    if (i < bills.length) {
        const tip = bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2 ;
        tips.push(tip);
        total.push(bills[i] + tip);
    }
    return `bills = ${bills}, tips = ${tips}, total = ${total}`;
}

const bills = [125, 555, 44];
console.log(calcTip(bills));

// Objects

const matthewArray = [
    'Matthew',
    'Read',
    2021 - 1994,
    'Software Engineer',
    ['Kim', 'Harry', 'Arthur', 'Benedict']
]; // can only access via index position

const matthew = {
    firstName: 'Matthew',
    lastName: 'Read',
    age: 2021 - 1994,
    job: 'Software Engineer',
    friends:['Kim', 'Harry', 'Arthur', 'Benedict']
}; // Object created using "Object Literal" syntax

const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: 55.98,
    neighbours: ['Ireland', 'Scotland', 'Wales']
};

    // dot notation
console.log(matthew.lastName); // will log 'Read'

    // bracket notation
console.log(matthew['age']); // will log 27

    // bracket notation with evaluated input value
const nameKey = 'Name';
console.log(matthew['first' + nameKey]); // will log 'Matthew' - 'first' + nameKey = 'first' + 'Name' = 'firstName'
console.log(matthew['last' + nameKey]); // will log 'Read' - 'last' + nameKey = 'last' + 'Name' = 'lastName'

const interestedIn = prompt('What do you want to know about Matthew? Choose between firstName, lastName, age, job and friends'); // saving one of the object properties to interestedIn
console.log(matthew[interestedIn]);

if(matthew[interestedIn]) {
    console.log(matthew[interestedIn]);
} else {
    console.log("I'm afraid that that information is not available. Choose between firstName, lastName, age, job and friends");
}

    // add to object using both syntaxes
matthew.location = 'Bristol';
matthew['instrument'] = 'Double Bass';

    // Challenge: return "Matthew has 3 friends, and his best friend is called Kim"
    // without hard-coding the information

const numFriends = matthew.friends.length;
const bestFriend = matthew.friends[0];
console.log(`Matthew has ${numFriends} friends, and his best friend is called ${bestFriend}`);

// print statement to console
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}`);
// increase popultaion by 2 million
myCountry.population = myCountry.population + 2;
// re-print statement
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}`);

// Object Methods

    const matthew = {
        firstName: 'Matthew',
        lastName: 'Read',
        birthYear: 1994,
        job: 'Software Engineer',
        friends:['Kim', 'Harry', 'Arthur', 'Benedict'],
        hasDriversLicense: true,
        // add a function as the value of a key value pair
        calcAge: function (birthYear) {
            return 2021 - birthYear;
        }
    };

console.log(matthew.calcAge(1994));
console.log(matthew['calcAge'](1994));

    // Pass in other values from the object
matthew.calcAge = function () {
    return 2021 - this.birthYear;
}

console.log(matthew.calcAge());

    // use this keyword to save new values
    matthew.calcAge = function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    }

console.log(matthew.calcAge());

    //Challenge - crate a property that will log "Matthew is a 27-year old software developer, and he has a/no driver's license"
    matthew.getSummary = function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense === true ? 'a' : 'no'} driver's license`;
    }

console.log(matthew.getSummary());

const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: 55.98,
    neighbours: ['Ireland', 'Scotland', 'Wales'],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
and a capital called ${this.capital}`;
    }
};

console.log(myCountry.describe());

// Coding Challenge #03

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName()}'s BMI (${Math.round(mark.calcBMI())}) is higher than ${john.fullName()}'s (${Math.round(john.calcBMI())})!`);
} else if (mark.calcBMI() < john.calcBMI()) {
    console.log(`${john.fullName()}'s BMI (${Math.round(john.calcBMI())}) is higher than ${mark.fullName()}'s (${Math.round(mark.calcBMI())})!`);
} else {
    console.log(`${mark.fullName()} and ${john.fullName()} have the same BMI (${Math.round(mark.calcBMI())})`);
}

// The For Loop

    // instead of...
console.log("Lifting weights: Repetition number 1");
console.log("Lifting weights: Repetition number 2");
console.log("Lifting weights: Repetition number 3");
console.log("Lifting weights: Repetition number 4");
console.log("Lifting weights: Repetition number 5");
console.log("Lifting weights: Repetition number 6");
console.log("Lifting weights: Repetition number 7");
console.log("Lifting weights: Repetition number 8");
console.log("Lifting weights: Repetition number 9");
console.log("Lifting weights: Repetition number 10");
    // write...
for (let rep = 1; rep <=10; rep ++) {
    console.log(`Lifting weights: Repetition number ${rep}`);
}

for (let voter = 1; voter <= 50; voter ++) {
    console.log(`Voter number ${voter} is currently voting`);
}

const matthew = [
    'Matthew',
    'Read',
    2021 - 1994,
    'Software Engineer',
    ['Kim', 'Harry', 'Arthur', 'Benedict']
];

const types = [];
for (let i = 0; i < matthew.length; i++) {
    types[i] = typeof matthew[i]; // could also use .push()
    console.log(matthew[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i ++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

    // continue - only logs strings
    for (let i = 0; i < matthew.length; i++) {
        if (typeof matthew[i] !== 'string') continue;
        console.log(matthew[i])
    }

    // break - breaks with number
    for (let i = 0; i < matthew.length; i++) {
        if (typeof matthew[i] === 'number') break;
        console.log(matthew[i])
    }

const populations = [32, 74, 2.79, 46];
    // old method
function percentageOfWorld5(population) {
    return ((population / 7900) * 100).toFixed(2);
}
const percentages = [percentageOfWorld5(populations[0]), 
    percentageOfWorld5(populations[1]), percentageOfWorld5(populations[2]),
    percentageOfWorld5(populations[3])];
console.log(percentages);

    // new method
const percentages2 = [];
for (let i = 0; i < populations.length; i ++) {
    percentages2.push(((populations[i] / 7900) * 100).toFixed(2))
}
console.log(percentages2);

// Looping backwards and loops in loops

const matthew = [
    'Matthew',
    'Read',
    2021 - 1994,
    'Software Engineer',
    ['Kim', 'Harry', 'Arthur', 'Benedict']
];

for (let i = matthew.length; i >= 0; i--) {
    console.log(matthew[i]);
}

for (let exercise = 1; exercise <= 3; exercise ++) {
    console.log(`Starting exercise ${exercise}`);
    for (let rep = 1; rep <= 5; rep ++) {
        console.log(`Lifting weight: Repetition number ${rep}`);
    }
}

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i ++) {
    for (let x = 0; x < listOfNeighbours[i].length; x ++) {
        console.log(listOfNeighbours[i][x]);
    }
}

// The While Loop

let rep = 1;
while (rep <=10) {
    console.log(`Lifting weights: Repetition number ${rep}`);
    rep ++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}

const populations = [32, 74, 2.79, 46];
const percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(((populations[i] / 7900) * 100).toFixed(2));
    i++;
}
console.log(percentages3); */

// Coding Challenge #04

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
    tips.push(tip);
    totals.push(bill + tip);
}

for (let i = 0; i < bills.length; i ++) {
    calcTip(bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
    let output = 0;
        for (let i = 0; i < arr.length; i++) {
            output += arr[i];
        }
    return output / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));