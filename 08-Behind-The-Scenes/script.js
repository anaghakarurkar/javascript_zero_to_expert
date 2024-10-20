'user strict';

function calcAge(birthYear) {
  // finded in a global execution context (global scope)
  const age = 2024 - birthYear; // function scope - function context
  // console.log(firstName);

  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // parent function scoped, not block scope
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`; // block scoped
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    //console.log(str); Not accessible here
    console.log(millenial); // accessible here becuse millenial is var and it is not block scoped
  }
  printAge();
  return age;
}

const firstName = 'Jonas'; // Gloal scope
calcAge(1991);
//cosole.log(age)
//printAge();
