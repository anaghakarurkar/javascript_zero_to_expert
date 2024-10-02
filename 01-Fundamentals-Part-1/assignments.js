//values  and variables
const country  = "United Kingdom";
const continent = "Europe";
let population =  69138192;

console.log("You live in country " + country + ". It is part of " + continent + " with population " + population);

//Data Types
const isIsland = true;
const language = "English";

console.log("Variable isIsland is of type " + typeof isIsland);
console.log("Variable population is of type " + typeof population);
console.log("Variable country is of type " + typeof country);
console.log("Variable language is of type " + typeof language);

//let, const and var
//change varible type to const if value is never going to change

//Basic operators
let halfPopulation = population / 2;
console.log(country + "'s half population is " + halfPopulation);

console.log("Population of " + country + " increased by one is " + population++);

let finlandPopulation = 6000000;
console.log("Does " + country + " have more population than Finland?  " + (population > finlandPopulation));

let averagePopulation = 33000000;
console.log(`Does ${country} have less people than the avarage country ?  ${population < averagePopulation}`);

const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(description);

