//  👉Ecmascript means add the new feature in javascript for per 3 4 year
// 👉1996 javascript is created. and 1997 made for the 
// ecmainternational.it was then submitted to ECMA international 
// for stabdardziation which resulted in ECMAscript.

//  👉2015 in ES6/ ECMAScript 2015 dedicated to switch to annual
//  relase of ECMAscript.

//  👉let and const keyword is the release for the 2015.

//  👉ECMAScript 2015 / E6:=
// Let and const
// template string
// default argument
// arrow function
// destructuring
// object properties
// rest operators
// spread operatores


//  👉keyword:-
// 👉 let:-the let keyword is used to declare variables with bloack
//  scope.variables declared with let are mutable,meaning their
//  values can be reassigned.

//  👉const keyword:-
//  👉the const keyword is used to declare varibales with block 
// scope but once a value is assign to a const variable ,it can 
// not be reassigned.const variable are im-mutable.
// for example :- pi = 3.14 * r * r means it is not change it is
//  constant value.

// using var:-
// var myfavname = "twinkal pansuriya";
// myfavname = "Janvi"
// console.log(myfavname);   //it is change the value


// var name = "thapa";
// if(true)
// {
//     var name = "Vinod";
//     console.log(name);
// }
// name = "technical";
// console.log(name);

// ->here var is the not assign the bloack of code executed.
// if(true)
// {
//     var name = "twinkle";
//     console.log(name);
// }
// // name = "pansuriya";
// console.log(name)

// // using let:-
// let myfavname = "twinkal pansuriya";
// myfavname = "Janvi"
// console.log(myfavname);   //it is change the value


// if(true)
// {
//     let name = "twinkle";
//     console.log(name);
// }
// // name = "pansuriya";
// console.log(name)  //give the error


//using const:-
// const myfavname = "twinkal pansuriya";
// myfavname = "Janvi"
// console.log(myfavname);   //it is  not change the value give the error

// const name="thapa";
// if(true)
// {
//     const name = "vinod";
//     console.log(name);
// }
// name="technical";
// console.log(name);


//👉template sting - 2015:-
// in ecmascript 6  template string is also known as template 
// literales,provide a convenient and flexible way to create
//  strings in javascript template string are enclosed in (``) rather 
// than double and single quotes.

let firstname = "Vinod";
let lastname = "Thapa";

// let fullname = firstname + lastname;
let fullname = `${firstname} ${lastname}`;   //latest method
console.log(fullname);

//👉string interpolation:-
// template string support string interpolation,allowing you to
//  embend expressions directly within the string.interpoleted 
// expressions are enclosed ${}

let age = 21;

// string interpolation with variable.
let message = `I am ${age} years old.`;
console.log(message);

//👉multi-line string:-
// template string make it easy to create a multi-line string without 
// the need for concatenation or escape character.

let multilinestring = `
    this is the multi-line
    string using template literales 
    its must cleaner and easier to read`;

console.log(multilinestring);

//👉Expression evaluation:-
//template expression is include any valid javascript expression.

let num = 5;
console.log(`5 * ${num} = ${num}`);

// 👉Default parameter:-
// In ECMAScipt is 6 default parameter were introduced providing a 
// more concise way to handle function parameter defaults.default 
// parameter allow you to specify default values for function
//  parameters in the functions declaration itself.if a parameters 
// is not provided when the function is called the default value is 
// used.

// Default function parameters allowed named parameter to be 
// intitlized with default values if no value or undefind is passed.

// 👉write a function to find sum of two numbers?what if during 
// function call user only pass one argument.

function sum(a,b=10)   //<-Default parameter pass the default value.
{
    return a + b;
}
console.log(sum(8));


// 👉FAT arrow function:- (IMP):-
// ->In ECMAScript 6 arrow function also known as fat arrow function 
// were intoduced as a concise way to write anonymous function.it is 
// called anonymous function.

// how to convert the same in fat arrow function.
//👉syntax:-

// const functionname = (parameter1 , parameter2,...) => {
//     return result;
// };

const sum1 = (a,b) => {
    let result = `The sum of ${a} and ${b} is ${a+b}`;
    console.log(result);
}

sum1(10,20);

// todo notes:-
// 👉if the function body consists of a single expressions the braces
//  {} and the return keyword can be omitted.

const sum2 = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum2(20, 30));
 
// 👉if there is only one parameter the parameter () around the 
// parameter list can be ommited.

const square = (c) => `The square  ${c} is ${c*c}`;
console.log(square(5));

// 👉If there are no parameters use an  empty set of parantheses().

const greet = () => console.log("hello");
greet();




