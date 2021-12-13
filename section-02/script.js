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
}

// Boolean Logic / Logical operators
const hasDriversLicence = true;
const hasGoodVision = false;

console.log(hasDriversLicence && hasGoodVision); // returns false
console.log(!hasDriversLicence || hasGoodVision); // returns false
console.log(!hasDriversLicence); // returns true

const isTired = true;
const shouldDrive = hasDriversLicence && hasGoodVision && !isTired; // you don't want your driver to be tired (ie isTired === true is bad), so use ! (NOT operator)

const country = 'England';
const language = 'English';
const isIsland = true;
const population = 68;

if(language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// Coding Challenge #03
    // Data 1
let dolphinsScore1 = (96 + 108 + 89) / 3;
let koalasScore1 = (88 + 91 + 110) / 3;

if(dolphinsScore1 > koalasScore1 && dolphinsScore1 > 100) {
    console.log("Dolphins win!");
} else if(koalasScore1 > dolphinsScore1 && koalasScore1 > 100) {
    console.log("Koalas win!");
} else if(dolphinsScore1 === koalasScore1 && dolphinsScore1 > 100) {
    console.log("It's a draw");
} else {
    console.log("Nobody wins :(");
}

    // Data 2
let dolphinsScore2 = (97 + 112 + 101) / 3;
let koalasScore2 = (109 + 95 + 123) / 3;

if(dolphinsScore2 > koalasScore2 && dolphinsScore2 > 100) {
    console.log("Dolphins win!");
} else if(koalasScore2 > dolphinsScore2 && koalasScore2 > 100) {
    console.log("Koalas win!");
} else if(dolphinsScore2 === koalasScore2 && dolphinsScore2 > 100) {
    console.log("It's a draw");
} else {
    console.log("Nobody wins :(");
}
    
    // Data 3
let dolphinsScore3 = (97 + 112 + 101) / 3;
let koalasScore3 = (109 + 95 + 106) / 3;

if(dolphinsScore3 > koalasScore3 && dolphinsScore3 > 100) {
    console.log("Dolphins win!");
} else if(koalasScore3 > dolphinsScore3 && koalasScore3 > 100) {
    console.log("Koalas win!");
} else if(dolphinsScore3 === koalasScore3 && dolphinsScore3 > 100) {
    console.log("It's a draw");
} else {
    console.log("Nobody wins :(");
}
    
// The Switch Statement
const day = "monday";

switch(day) {
    case "monday": // colon (not semi-colon) after each case
        console.log("udemy");
        console.log("code");
        break // not having a break at the end of each case statement will mean thatthe codecontinues to run
    case "tuesday": // means the same as -> day === "tuesday"
        console.log("emails");
        break
    case "wednesday": // wednesday and thursdya will have the same output
    case "thursday":
        console.log("code");
        break
    case "friday":
        console.log("apprenticeship work");
        break
    case "saturday":
    case "sunday":
        console.log("relax");
    default: // default works like else
        console.log("that's not a day");
} // will return "udemy" \n\ "code"

const language = 'english';

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break
    case 'english':
        console.log('3rd place');
        break
    case 'hindi':
        console.log('Number 4');
        break
    case 'arabic':
        console.log('5th most spoken language');
        break
    default:
        console.log('Great language too :D');
} // will return '3rd place' */

// The Conditional/Ternary Operator

const age = 23;
age >= 18 ? console.log('I love beer') : console.log('No beer for me');
    
    // instead of...

if (age >= 18) {
    console.log('I love beer')
} else {
    console.log('No beer for me')
}

const country = 'England';
const population = 68;

population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);