'use strict';

function calcAge(birthYear) {
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
      console.log(add());
    }
  }
  // console.log(millenial) => will work, as only let/const are block scoped, not var
  printAge();
  return age;
}

const firstName = 'Matthew';
calcAge(1994);
const a = 72;
let b = 83;
