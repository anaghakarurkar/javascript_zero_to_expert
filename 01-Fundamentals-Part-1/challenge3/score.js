const scoreDolphins = (190 + 108 + 89) / 3;
const scoreKoalas = (89 + 91 + 110) / 3;

console.log(`Average score of Dolphins is : ${scoreDolphins}`);
console.log(`Average score of Koalas is: ${scoreKoalas}`);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy ");
} 
else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} 
else if((scoreDolphins === scoreKoalas) && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
}
else {
    console.log("No one wins the trophy");
}