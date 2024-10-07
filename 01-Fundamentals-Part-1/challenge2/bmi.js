//Coding challege 1 - operator precedence BMI
const massMark = 40;
const heightMark = 1.60;

const massJohn = 50;
const heightJohn = 1.63;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI: " + BMIMark);
console.log("John's BMI: " + BMIJohn);

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's  BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}