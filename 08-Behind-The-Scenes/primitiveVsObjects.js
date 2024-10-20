let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 34,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 34,
  family: ['Alice', 'Bob'],
};

// Object.assign creates a shallow copy. Does not copy objects inside object
const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
