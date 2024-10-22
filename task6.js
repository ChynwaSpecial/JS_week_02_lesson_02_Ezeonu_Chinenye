// ErrorIdentified [Missing parenthesis]
if (x === 5) { // added closing parenthesis
    console.log("x is equal to 5");
  }


// ErrorIdentified [Missing semicolon]
const message = "Hello, world"; // added semicolon
console.log(message);// added semicolon


// No error identified
function sayHello() {
    console.log("Hello!");
  } 
  console.log("Goodbye!");

  
// ErrorIdentified [Missing closing bracket]
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]); // added closing parenthesis


// ErrorIdentified [Incorrect function definition]
const addNumbers = function(x, y) { // added opening curly brace
    return x + y; 
  }; // removed the extra closing brace
  console.log(addNumbers(5, 10));
  

