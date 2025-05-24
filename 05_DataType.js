// 👉Datatype define the type of values that a variable can hold

// 👉2 types of datatype:-
// 1)premitive datatype:-
// 👉string :- represent a sequance of character enclosed the single or double quotes.

var myname = "Twinkal";
console.log(myname);

// 👉 number :- represent numeric value, including int and floating
//  point number.

var mynum = 10;
console.log(mynum);
console.log(typeof mynum);


// 👉convert the string to a number
//👉 we just need to  add the '+' sign  before the string.
var num = "10";
console.log(num);
console.log(typeof +num);

// 👉second way
var num = "10";
console.log(typeof Number(num));

// 👉conert number into string.
let str = 6;
console.log(typeof String(str));
console.log(typeof (str + ""));

// 👉Third way:-
// 👉parseint:- parseint is used to  parse a string and convert it
//  to an int(whole number).
const mystring = "20";
const mynum1 = parseInt(mystring);
console.log("used parseint=",mynum1);

// 👉parseFloat :- parseFloat is used to parse a string  and
//  convert it to an floatinh point number(decimal number).
const mystring1 = "20.9";
const mynum2 = parseFloat(mystring1);
console.log("used parsefloat=",mynum2);

// 👉boolean:- represent a logical entity with two values True or False.
var isranning = true;
var areyou = false;
console.log(isranning,areyou);
console.log(typeof isranning);

// 👉undefind:-reprsent the absence of value or an uninitilize variable
var tweenkal;
console.log(tweenkal);

// 👉null:-represent the absence of value.it is often used to
//  explicitely indicate that a variable or object property has 
// no assign value.

var badmemories = null;
console.log(badmemories);
console.log(typeof null);

// 👉bigint:-represent int of arbitary precisian.
const bignum = 123455677;
console.log(bignum)


//👉more examples:-
console.log(parseInt("10"));
// 123(default base 10)

console.log(parseInt("123",10));
// 123 = explicitly specified base 10

console.log(parseInt(" 123 "));
//  123 white space is ignored

console.log(parseInt("077"));
console.log(parseFloat("077"));
// 77 leading zero is ignored

console.log(parseInt("1.9"));
console.log(parseFloat("1.8"));

console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));


// 👉check the number is yes or not
console.log(isNaN("hjj"));
console.log(isNaN("8"));

// 1 decimal part is ignored


//👉 NaN == NaN why it is false?
if(5 == 5)
{
    console.log("this is true");
}
else
{
    console.log("This is false");
}

if(NaN == NaN)
{
    console.log("both equal");
}
else
{
    console.log("not equal");
}

console.log(parseInt("xyz"));
console.log(parseInt("@$&"));

// here both are not equal then NaN==NaN are false.

// 👉symbol:-
// 2)objective datatype:-
// 👉an object , an array , an date


// 👉Interview questions:-
// 👉1)what is defference between null and undefind?
// 👉ans: variable create without any value assign its called 
// undefind and create a variable and assign a null value its
//  called null.


// 👉2)What is purpose of typeof operator in javascript?
// 👉ans :- console.log(typeof isranning);

// 👉3)Convert string to a number?
// 👉ans:-we just need to  add the '+' sign  before the string.

// 👉true:-
// any non empty string("hello") it called true
// any non-zero number(43) it called true
// array and objects if they are not empty.

// 👉false:-
// 0(zero) means false
// '' (an empty string)
// null
// undefind
// NaN(not a number)
