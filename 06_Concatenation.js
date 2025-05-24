// 👉in javascript the + sign is not only used for the arithmatic 
// addition but also for string concatenation.when the operator is
//  used with string ,it concatenation the string together.

//👉it is important to note that if any operands of the + operator
//  is a string.javascript will treat the other operands as strings
//  as well resulting in string concatenation.if both operands are 
// numbers the + operator perform a numeric addition

const str = "hello " + "world";
console.log(str);

// 👉Type coercion is the automatic conversion of "values" from one data
//  type to another.
// 👉it is a fundamental part of javascript and can be used to 
// make code more readable and efficient.
// 👉there are two types of coercion happens implicit and explicit.
// implicit coercion happens automatically while explicit coercion 
// is done manually by the programmer.

// 👉it is worth nothing that type coercion can lead to unexcepted
//  results so it essential to be aware of how javascript handle
//  these situation.

console.log(10 + "20");  //it is concatenation 1020
console.log(9 - "5");   //it is minus the 9 - 5
console.log("Java" + "Script");
console.log(" " + " ");  //it is give empty space
console.log("" + 0);   //0

let sum = " " + 0;
console.log(typeof sum);  //string

console.log("Vinod" - "Thapa");  //NaN
console.log(true + true);  //2
console.log(true + false); //1
console.log(false + true); //1
console.log(false - true);  //-1

