'use strict';
/* Thinking process
1. create a function which accepts array as a argument

2. Collect the test data for an array. for example [17, 21, 23]

3. Generate the message using loops
solution: array length might be different each time, so use loops to traverse through and array and build the string.

4. How to get degrees symbol?
solution: search on web to find the shortcut for emoji window.  Shortcut is window key + . 
Then chose the degrees symbol to include in the message.

5. Find how to add ... at the start of the message and end of the message? 
solution: can use string.padEnd() and string.padStart() methods or ... string directly 

6. log the message using console.log() method

7. call the function to see the output

*/
const printForecast = function (arr) {
  let message = '...';
  for (let i = 0; i < arr.length; i++) {
    message += `${arr[i]}°C in ${i + 1} days... `;
  }

  console.log(message);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
