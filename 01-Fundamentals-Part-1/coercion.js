//Type coercion
// - operator will convert string to number so output is 4
console.log("Type coercion Demo : ");

console.log(`'9' - '5' = ${'9' - '5'}`); 

// '19' - '13' = 6 , 6 +'17' = 617
console.log(`'19' - '13' + '17' = ${'19' - '13' + '17'}`); 

// '19' - '13' = 6, 6 + 17 = 23
console.log(`'19' - '13' + 17 = ${'19' - '13' + 17}`); 

// < operator will convert string to number
// 123 < 57 = false
console.log(`'123' < 57 = ${'123' < 57}`); 

// 5 + 6  = 11 , 11 + '4' = '114',
// '114' + 9 = '1149', '1149' - 4 = 1145
//1145 - 2 = 1143
console.log(`5 + 6 + '4' + 9 - 4 - 2 = ${5 + 6 + '4' + 9 - 4 - 2}`); // -> ?