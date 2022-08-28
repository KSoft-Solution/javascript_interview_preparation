/*
Hoisting is a javascript mechanism where variables and function
declarations are moved to the top of their scope
before code execution. Remember that javascript only hoists declarations,not initialization
*/

console.log(message)//undefined
var message = 'the variable has beed hoisted'

/* the above code looks like as below to the interpreter. */

var message;
console.log(message);
var message = 'the variable has been hoisted'