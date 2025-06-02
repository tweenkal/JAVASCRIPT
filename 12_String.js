// 👉string in javascript are a fundamental data type that
//  represents a sequance of characters
// 👉string created with single or double quotes work the same.

// 👉string properties:-
// 👉length:-property that returns the length of the string
// (number of characters).it is always start one.

const str = "hello world";
console.log(str.length);

//👉 Escape character:- In javascript the backslash \ is used as 
// an escape character it allowes you to include special character 
// in a string.

// code     result    description
// \'           '       single quotes.
// \"           "      double quotes.
// \\           \       back slash.

// let text = "My name is \'Twinkal\' and i am \"python\"; 
// console.log(text);
 
// 👉string search method:-
// 1.indexOf():- the indexOf() method returns the index(position) of 
// the first occurance of string in a string ,or it returns  -1 if 
// the string is not found.

let text1 = "Thapa Techinal"
console.log(text1.indexOf("Techinal"));

// convert string to array 
let strarr = Array.from(text1);
// console.log(strarr);

let strmap = strarr.map((currElem,index) => {
    return `${currElem} - ${index}`
});
console.log(strmap);

// 2.lastIndexOf :- the lastIndexOf() method returns the index of 
// the last occurance of a specified text in a string. 

let text2 = "hello javascript, welcome to our world best javascript course";
let index1 = text2.indexOf("javascript");
let index = text2.lastIndexOf("javascript");
console.log(index1);
console.log(index);

//3.search() :-the search() method searches a string for a 
// stirng(or a regular expression) and returns the position of 
// the match.
// returns the index number where the first match is found.returns
//  -1 if no match is found.

let text3 = "hello javascript, welcome to our world best javascript course";
let index3 = text3.search(/Javascript/i);  //i means ignore the capital and small letter.
console.log(index3);

// important tipes:-
// the search() method can not take a second start position argument.
// the indexOf() method can not take powerfull search values(regular 
// expression).
// the accept the same arguments(parameters) and return the same values.

// 4.match():-return an array of the matched values or null if no
//  match found.

let text4 = "hello javascript, welcome to our world best javascript course";
// let result = text4.match("Javascript"); //null
let result = text4.match("javascript");
console.log(result);

//here the js converts the normal text into regular expression
//  text.match(/javascript/);without the g flag.  
let results = text4.match(/javascript/g);
console.log(results);
 
// 5.matchall() :-returns an iterator of all matches,providing
//  detailed information about each returns an empty iterator 
// if no match  is found.

let text5 = "hello javascript, welcome to our world best javascript course";
let matchresult = text5.matchAll("javascript");
//here the js convert the normal text into regular  expression
//  text.match (/javascriot/g); also adds the g flag  at the end.
console.log(...matchresult);

// using for of loop
for(let item of matchresult)
{
    console.log(item[0]);
}

// 6.include():-return true  if the string contains the specified
//  value and false otherwise.in include not use regular expression.

let text6 = "hello javascript, welcome to our world best javascript course";
let ans4 = text6.includes("java");
console.log(ans4);

// 7.startsWith():- the startsWith() method returs true if a  
// string being with a specified value.otherwise it retuens false.

let text7 = "hello javascript, welcome to our world best javascript course";
// let ans5 = text7.startsWith("hello");
let ans5 = text7.startsWith("Welcome");
console.log(ans5);

// start position for the search can be specified.
let ans6 = text7.startsWith("javascript",6);
console.log(ans6);

//8.endsWith():-the endsWith() method returns true if a string ends
//  with a specified value.otherwise it return false.
let text8 = "hello javascript, welcome to our world best javascript course";
let ans7 = text8.endsWith("course");
console.log(text8);

// 👉Extracting string part:-
// 1.slice() :- extracts a part of a string and returns the
//  extracted part in a new string.javascript counts positions from 
// zero.slice() extractes up to but not including indexEnd.
let text9 = "hello javascript, welcome to our world best javascript course";
let ans8 = text9.slice(6,15);
console.log(ans8);

//2.substring:-substring extractes a portion of the string baed on 
// starting and ending indices.substring is a simillar to slice().the
//  difference is that start and end values less than 0 are treated 
// as 0 in substring.

let text10 = "hello javascript, welcome to our world best javascript course";
let ans9 = text10.substring(6);
console.log(ans9);

// similarities:-
//in the both slice() and substring() methods the end parameter 
// indicates the ending index up to which the extraction occures 
// but the character at the end index is excluded from the extracted
//  substring.


// 👉replace():-

let text11 = "hello javascript, welcome to our world best javascript course";
// let ans10 = text11.replace("javascript","Twinkal");
let ans10 = text11.replaceAll("javascript","Twinkal");
console.log(ans10);

// 👉Extracting string characters:-
// there are 3 method for extracting string character.
// 1.the charAt(position) method
// 2.the charCodeAt(position) method
// 3.the at(position) method

// 1.charAt():-the charAt() method returns the character at a
//  specified index(position) in a string.

let text12 = "hello javascript, welcome to our world best javascript course";
let ans11 = text12.charAt(6);
console.log(ans11);

//2.charCodeAt():-the charCodeAt() method returns the code of the
//  character at a specified index in a string.the method returns a 
// UTP-16 code(an integer between 0 and 65535).charcode is a=65 and z=90.

let text13 = "hello javascript, welcome to our world best javascript course";
let ans12 = text13.charCodeAt(6);
console.log(text13);

//3.at():-the at() method returns the character at a specified
//  index(position) in a string.the at() method returns the same
//  as carAt().

text14 = "hello javascript, welcome to our world best javascript course";
let ans13 = text14.at(6);
console.log(ans13);


// 👉replacing  string content:-
// 1.replace():-the replace method is used to replace a specified 
// value with another value.

const str1 = "hello world";
const result1 = str1.replace("world","javascript");
console.log(result1);

// 👉toUpperCase and toLowerCase:-converts the string to uppercase
//  or lowercase.

const str2 = "hello world";
console.log(str2.toUpperCase())
console.log(str2.toLowerCase());


// trim:- removes whitspace from both ends of the string.
const str3 = "    hello world  ";
console.log(str3.length);

trimstr = str3.trim()
console.log(trimstr);

console.log(trimstr.length);

// split():-splits the string into an array of substring based on a 
// specified delimiter.it is convert for string to array.
const str4 = "apple,orange,mango";
let splitstr = str4.split(",").reverse();
console.log(splitstr);

// array to convert string.
const str5 = "apple,banana,mango";
let splitstrt1 = str5.split(",").reverse().join();
console.log(splitstrt1);

// 👉interview questions:-
// 👉write a javascript functions that prints the letters 'a'
//  through 'z' in the console.you should use a loop to iterate
//  through the letters and print each one on new line.

console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

for(let char=97 ; char <= 122 ; char++)
{
    console.log(String.fromCharCode(char));
}

// 👉write a function to count the number of vowels in a string.








