//👉5 + 78 :- here 5 and 78 is operand and + is the opeartor and
//  combination of opearand and operator is called the expression.

// 👉Opreators type:-
// 1)Arithmatic operator
// 2)Assignment operator
// 3)Logical operator
// 4)Comparision operator
// 5)String operator
// 6)Unery operator
// 7)Ternary(conditional) opeartor
// 8)Type oprator

// 👉1)Assignment operator:-
// 👉assignment operator are programming in symbols are used to
//  assign values to varibles.they take the value on the right side 
// of the operator and assign it to the variable on the left side.

var num = 20;   //= is the assignment 
console.log(num);

// 👉2)Arithmatic operator:-
// 👉arithmatic operator in programming perform basic mathamatical
//  operations on variables or values.they include addition,
// subtraction,multiplication,division and moduler.

// 👉Addition:-
let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum=",sum);

// 👉Subraction:-
let x = 10;
let y = 20;
let sub = x - y;
console.log("Sub=",sub)

// 👉Multiplication:-
let p = 20;
let q = 20;
let mul = p * q;
console.log("Mul=",mul);

// 👉Division:-
let d = 90;
let f = 20;
let div = d / f;
console.log("Div=",div)

// 👉Moduler:-
let m = 17;
let n = 3;
let mod = m % n;
console.log("Mod=",mod);

var str = "hello" / 2;
console.log(str);   //NaN

var result = 0.1 + 0.2;
console.log(result.toFixed(2));  //toFixed is give the after 2 point for the decimal number.

var result1 = 0.2 + 0.2;
console.log(result1);  //0.4

// 👉3)String operator:-
// 👉There are few ways are concatenate string in javascript.the 
// most common way is the use the + operator.for example to concate 
// the string "hello" and "world" you would use following code.

var str1 = "hello ";
var str2 = "world";
var str3 = str1 + str2;
console.log("Concatenate=",str3)

// 👉4)Comparision operator:-
// 👉comparision opertor in javascript are used to compare values
//  and return a boolean result(true or false).
// 👉they are include equal(==),strict equal(===),

// 👉equal(==)
console.log(5 == 5); //true
console.log(5 == "5"); //true but both are datatype is not equal.

// 👉strict equal(===):-
console.log(5 === "5"); //false because but datatype is not equal.

// 👉not equal(!=):-
console.log(5 != 5);

// 👉greater than(>):-
console.log(5 > 2);

// 👉less than(<):-
console.log(20 < 12);

// 👉less than equal(<=):
console.log(10 <= 10);

// 👉greater than equal(>=):
console.log(20 >= 12);


// 👉5)Logical operator:-
// 👉there are three main logical operator logical and(&&) ,
//  logical or(||) , logical not(!)

// 👉logical and(&):-
var a1 = 9;
var a2 = 10;
console.log(a1 > 0 && a2 < 0);

// 👉logical or(||):-
var a3 = 10;
var a4 = 0;
console.log(a3 > 10 || a4 < 10);

// 👉Logical not(!):-
var isopen = false;
console.log(!isopen);

// 👉interview questions:-
// 👉write a programe the determine if a person is eligible to drive
//  based on their age being greater than or equal to  18 and having
//  a valid driver's licence?

var age = 15;
var handdrivinglicence = true;
console.log(age > 18  && handdrivinglicence);


// 👉Ternary operator:-
// 👉syntax:- conditio ? expressionIfTrue : expressionIfFalse;

// 👉write programe to check if the condition isEligibleForDrive
//  or not?age must be equal to or greater than equal to 18.

let age1 = 15;
let result2 = age1 >= 18 ? "Yes" : "No";
console.log(result2);
 
// 👉let say you have a variable score representing a student's
//  exam score.if the score is greater than or equal to 60,the
//  student pass,otherwise they fail.use the conditional operator
//  to determine the result and store it in a variable called result.
// log the result to console?

var score = 99;
var result3 = score >= 60 ? "Pass" : "Fail";
console.log(result3);


console.log(2 < 12 < 5);
//here 2 is less than 5 yes condition is true and it is true means 
// the 1 then 1 is less then 5 yes condition is true then result is 
// true.