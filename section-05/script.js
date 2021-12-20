// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Calculate the amplitude of an array of temperatures - the thermometer will ocassionally throw an error

/* const temperatures = [3, 15, -1, "error", 8, 8, 7, "error", 4];
const temperatures2 = [6, 4, 8, 9, 0, "error"];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Calculate the amplitude of an array of temperatures - the thermometer will ocassionally throw an error
//     Function should be able to accept multiple arrays

const temperatures = [3, 15, -1, "error", 8, 8, 7, "error", 4];
const temperatures2 = [6, 4, 8, 9, 0, "error"];

const calcTempAmplitude = function (t1, t2) {
  let temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Debugging

const matthew = {
  firstName: "Matthew",
  lastName: "Read",
  age: 27,
  job: "Software Engineer",
};

console.log("logging");
console.warn("warning");
console.error("error...ing??");
console.table(matthew); // Prints a table of above matthew object  */

// Coding Challenge #01

// Given an array of maximum forecasted temperatures, display a string with these temperatures
//      Eg. [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days"

const printForecast = function (arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      output.push(`... ${i}°C in 1 day `);
    } else {
      output.push(`... ${i}°C in ${i + 1} days `);
    }
  }
  output.push("...");
  return output.join("");
};

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

console.log(printForecast(testData1));
