// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Calculate the amplitude of an array of temperatures - the thermometer will ocassionally throw an error

const temperatures = [3, 15, -1, "error", 8, 8, 7, "error", 4];
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
