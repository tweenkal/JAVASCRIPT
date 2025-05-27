// 👉What is function?
// ans:-in javascript is a function is a bloack of reuseble 
// code that perform a specific task or set of tasks.function
//  are used to organized code into modular and managble 
// pieaces,promot code reuse and make programe more readable.

// sytax:-
// function functionname(parameter)
// {
//     //code be execute
// return result
// }


//👉function declaration:-
// ->function is declare the function keyword, followed by function
//  name,parameters(if any) and the function body. { } in write
//  the function of code its called function body

function greet() {
    console.log("hello");
}

// 👉after declaring a function you can invoke or call it by using its
//  name followed by parantheses.

// 👉if the function has parameters provide values(arguments) for
//  those inside the paranetheses.

// 👉How call a function:-
greet();

//👉function invocation:- means the call the function
function greet() {
    console.log("hello");
}
greet()  //function call

// 👉3 student at a same time wants to find the sum of two numbers.
function sum(a, b) {
    return a + b;
}
console.log(sum(80, 59));
console.log(sum(75, 78));
console.log(sum(45, 78));

// 👉write a function to find the sum of two numbers.
// function deffination
function sum1() {
    let a = 3;
    let b = 10;
    console.log("Sum=", a + b);
}
// calling the function
sum1()

// 👉function parameter:-
// 👉function parameter is the a variable that is listed as a part
// of a function declaration.it acts as a placeholder for a value
// that wil be provided when the function called.parameters allow
// you to pass information into a function,making it more versetile
// and reusable.

// function functionname(parameter1,parameter2,....)

// 👉function arguments:-
// 👉A function is a value that you provided when you call a
// function arguments are used to passed into a function fill
//  the parameters define in the function declaration.

// function name(argument1,argument2,....);

// 👉practice:-
// 👉write a javascript programe that defines a function called 
// greet to welcome individual to the thapa technical js course.the
//  function should take a name parameter and output the message 
// "Hello[name]",welcome to thapa technical js course".call the 
// function twice once with the argument,"vinod" and once with the
//  argument "ram". 

function greet(name) {
    console.log("Hello " + name + ", welcome to thapa technical js course");
}
greet("vinod");
greet("Ram");

// 👉write a function to find the sum of two numbers with parameteres.
function sum(a, b) {
    console.log(a + b);
}
sum(10, 20);

// 👉function expression:-
// 👉A function expression is a way to define a function as a part 
// of an expression.it can be either name or anonymouse.if its named
//  it becomes a named function expression. also function is define 
// as a variable.

var result = function sum(x, y) {
    console.log(x + y);
}
result(15, 20);

// 👉Anonymous function:=
// 👉An anonymouse function is a function without a name.it can be  
// created using either a function expression or a function
//  declaration without a specified name.

var result = function (a, b) {
    console.log(a + b);
}
result(88, 89);

//👉return keyword:-
// 👉in javascript the return statement  is used within a function 
// to specify the value that the function should produce or provide
//  back to the code that called it.the return statement stop the 
// execution of function and sends a value back to the caller.

// 👉returning a sum of two number
function sum(a, b) {
    // console.log( a + b);
    return a + b;
}
var result = sum(80, 59);
console.log("The sum of two number is=" + result);

//👉IIFE:-immediatly invoked function expression.
//👉IIFE is a javascript function that is defind and executed
// immediatly after its creation,it is a way to create a
// self-contained bloack of code that doesnt interface with
// the surrounding code and executes immedialty.

// 👉syntax:-
// (function () {
// })();

(function (a,b){
    console.log(a+b);
})(5,6);

// with function expression:=
var result = (function (a,b){
    console.log(a+b);
    return a+b;
})(5,6);

console.log("Sum of two number=" +result);

// 👉Interview questions:-
// 1)Calculator function:-
// write  a javascript function calculator that takes two numbers
//  and and operator as parameter and returns the result of the 
// operation the function should support addition ,subtraction 
// multiplication and division.

function Calc(num1,num2,operator)
{
    switch(operator)
    {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            return num1 / num2;
    }
}

console.log(Calc(8,6,'+'));
console.log(Calc(8,6,'-'));
console.log(Calc(8,6,'*'));
console.log(Calc(8,6,'/'));

//using the fat arrow function.
const calc = (num1 , num2 , operator) => {
    switch (operator)
    {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            return num1 / num2;
    }
};

console.log(calc(8,9,'*'));

// find index number in string
let str = "hello";
console.log(str[4]);

// index slicing:-
// ->slice() extracts a part of a string and returns the extracte 
// part in new string.
// 1.javascript counts positions from zero.
// 2.slice() extracts a up to but not including indexEnd.
// let ste = "hello world";
// console.log(str[1:4]);



// 👉reverse string:-
// 👉write a function to reverse a given string without using 
// built-in reverse method.

const isreverse = (str) => {
    let reverse = "";   
    for(let i=str.length-1 ; i>=0 ; i--)
    {
        reverse = reverse + str[i];
    }
    return reverse;
}

console.log(isreverse("hello world"));


//👉pallindrom check:-
// create a function to determine if a given string is a pallindrom 
// (reads the same as backword and foreword).

// pallindrom means is the string is reverse but read to the same 
// word its called pallindrom.

// radar = radar  , level = level


const ispallindrom = (str) => {
    let reverse = "";
    for(i=str.length-1 ; i>=0 ; i--)
    {
        reverse = reverse + str[i];
    }
    if(str == reverse)
    {
        return true;
    }
    else
    {
        return false;
    }
    return reverse;
}

console.log(ispallindrom("level"));


