// 👉Array:-
// javascript array is an object that represent a collection of
//  simillar type of elements.
// each value(name) will be called as an element.
// we can access each element using indexs.
// array is like a container is hold the data in a simillar type.

// first element or head:-referes to the element at index 0.
// last element or tail :-referes to the element at the  last which 
// can be  obtained using array.length -1.


// 👉creating array:-

// we can create a empty array.
let arr = [];
console.log(typeof arr);

// using array constructor.
let fruits = new Array("Apple","Banana","Cherry","Mango");
console.log(fruits);

// using array literal
let fruits1 = ["Apple","Banana","Cherry","Mango"];
console.log(fruits1);

// 👉Accessing elements:-Array elements are accessed using 
// zero-based indices.

let fruits2 = ["Apple","Banana","Orange","Cherry"];
console.log(fruits2[1]);
console.log(fruits2[2]);

// 👉Modify elements:-you can modify array elements by  assigning new 
// values to specific indices.

let fruits3 = ["Apple","Banana","Orange","Cherry"];
fruits3[2] = "Papaya";
console.log(fruits3);

// 👉Array Traversal / Iterating over Arrays:-

let fruits4 = ["Apple","Banana","Orange","Cherry"];

// 1.for of loop also known as iterable
// ->The for of loop is used to iterate over the values of an 
// iterable objects ,such as arrays,strings or other iterable objects.

for(let item of fruits4)
{
    console.log(item);
}

//using for loop
// for(item=0 ; item<=fruits4.length-1 ; item++)
// {
//     console.log(fruits4[item]);
// }

// 2.for in loop:-
// ->the for in loop is used to iterate over the properties
// (including indices) of an object.it is print array index

for(let item in fruits4)
{
    console.log(item);
}

// 3.forEach loop:-
// ->the arr.forEach() method calles the provided function once for
//  each elements of the array.the provided function may perform 
// any kind of operation on the element of given array.

fruits4.forEach((curElement , index , arr) => {
    console.log(`${curElement} ${index}`);  
    // console.log(arr);
});

//4.map() :- creates a arrauy from calling a function for every
//  array element does not change the original array.

fruits4.map((curElement , index , arr) => {
    console.log(`${curElement} ${index}`);
    // console.log(arr);
});


//Notes:-
// 👉differece between map and forEach loop:-
// foreach is store the varible but not return the value. and map
//  return the new array value.

//using foreach:-

// const myfavfruit = fruits4.forEach((curElement , index , arr) => {
//     return `${curElement} ${index}`;
// });

// console.log(myfavfruit);  //output:- undefind

// it is not return the array it give the undefind.

//map():-

const myfavarr = fruits4.map((curElement , index , arr) => {
    return `my fav fruit is ${curElement} ${index}`;
    // console.log(arr);
});

console.log(myfavarr);  //it is return the new array

// practice:-
// 👉write a programe to multiply each element with 2.

const number = [1,2,3,4,5];
number.forEach((curElement,index,arr) => {
    console.log(curElement * 2);
    //perform an action on each element
})


// using map()
const a = number.map((curElement , index , arr) => {
    return curElement * 2;
    //create a new array with transformed element.
})

console.log(a);


// key differences:-
// return value:-
// 👉foreach:- it doenst return a value.the foreach method is used
//  for iterating over the elements of an array and performing a 
// side effect,such as modyfying the array or performing a task 
// for each element.

//👉map:-it return a new array containing the result of applying a 
// function to each element in the original array.the original 
// array remains unchanged.

// chaining:-
//foreach :- it doent return a value so it cannot be directly 
// chained with other array method.

//map :-since it return a new array you can chain other array
//  methods after using map.

// 👉use case:-
// foreach :- used when you want to iterate over the array elements 
// and perform an action on each element,but you dont need a new array.

// map:- used when you want to create a new array based on the 
// transformation of each element in the original array.


// 👉how to insert,add ,replace and delete element in array(CRUD).
// 1.push():-method that adds one or more elements to the end of an
//  array.push method is return the new length.
const person = ["Twinkal","Janvi","Jay","Jasmin"];
person.push("Jurali");
console.log(person.push("Jurali"));

console.log(person);

//2.pop():-method that removes the last element from array.
person.pop();
console.log(person.pop());
console.log(person);

//3.unshift:-method that adds one or more elements to the begnning of array.
person.unshift("Jeny");
console.log(person);

// 4.shift():-method that removes the first element from array.
person.shift();
console.log(person);

// what if we want to add or removes anywhere in and elements.

// this splice() method of array instances changes the constants of
//  an array by removing or replacing existing elements and/or 
// adding new elements in place.  splice is give the always empty array.

// syntax:-
// splice(start,deleteCount,item1,item2,...);

// delete the Dog.
let animal = ["Cat","Dog","Cow","Camel"];
animal.splice(1,1);
console.log(animal);

// add the index no 1 for Horse
animal.splice(1,1,"Horse");
console.log(animal);

// what if you want to add the element at the end.
animal.splice(fruits.length,0,"Donkey");
console.log(animal);

// 👉Searching an array:-
// searching and filter array.

// for search we have -indexOf,lastindexOf and includes.
// 👉indexOf() :- the indexOf method returns the first index at 
// which a given element can be found in the array.or -1 it is not
//  present.

const number1 = [1,2,3,4,5,6];
console.log(number1.indexOf(5));

// i am search for the number is 4 and index number is 5 then it is 
// return to -1 because 4 is not index no of 5.

console.log(number1.indexOf(5,9)); //output: -1

// 👉lastindexOf method:-the lastindexOf method of array instances 
// return the last index at which a given element can be found in the
//  array,or -1 if it is not present.the array is searched backwards
//  starting at from index.

const num = [1,2,3,4,5,4,6,7,8]
const result = num.indexOf(4);
console.log(result);  //3
const result2 = num.lastIndexOf(4);
console.log(result2);  //5
const result3 = num.lastIndexOf(5,9);
console.log(result3);

// 👉includes() :- the include method checks whether an array
//  includes a certain element,returning true or false.

const num1 = [1,2,3,4,5,6];
const res = num1.includes(5);  //true
const res1 = num.includes(9); //false
console.log(res);
console.log(res1);

// 1.add dec at the end of an array?
const month = ["Jan","Feb","March","April","June"];
month.splice(month.length,0,"Dec")
console.log(month);

// 2.what is the return value of splice method?
// ->when used to add element the splice method return an empty
//  array([]).

// 3.update March to march in array.
const indexToUpdate = month.indexOf("March");
month.splice(indexToUpdate,1,"march");
console.log(month);

// 4.delete june for array.
const indexToDelete = month.indexOf("June");
month.splice(indexToDelete,1);
console.log(month);

// 👉filter:- search + filter
// 1. find method :- the find method is  used to find the first
//  element in array that specifies a provided testing function.it 
// returns the first matching element undefid if no element is found.

const num2 = [1,2,3,4,5,4,6,7,6,8];
const result4 = num2.find((curElement) => {
    return curElement > 5;
})
console.log(result4);

// 2.findindex method:-the findindex() method of typedarray 
// instances return the index of the first element in a typed array.

const number2 = [1,2,3,4,5,6,7];
const result6 = number2.map((currElem) =>
    currElem * 5
);
console.log(result6);

const result7 = result6.findIndex((currElem) => {
    return currElem > 10;
});
console.log(result7);

// 👉filter() :- the filter method creates a new array with all 
// elements that pass the test implement by the provided function.

const no = [1,2,3,4,5,6,7,8,9];
const ans = no.filter((curElement) => {
    return curElement > 4;
})

console.log(ans);

// UseCase:-In e-commerce website when we want to remove or delete 
// any product from addToCart page. 

// 👉lets say user wants to delete value 6.

let value = 6;
const digit = [1,2,3,4,5,6,7,8];

let updatecart = digit.filter((curElement) => {
    return curElement !== value;
});

console.log(updatecart);

// 👉filtering products by cart.filter product with a price less
//  than equal to 500.

const products = [
    {name : "Laptop" , price : 1200},
    {name : "Phone" , price : 9000},
    {name : "tablet" , price : 400},
    {name : "SmartWatch" , price : 4000},
];

const filterproduct = products.filter((currElem) => {
    return currElem.price <= 500;  
});
console.log(filterproduct);

//👉filter unique value.
const num3 = [1,2,3,4,5,6,7,6,8,4];
let uniquevalue = num3.filter((currElem,index,arr) => {
    return arr.indexOf(currElem) === index;
});
console.log(uniquevalue);
console.log([...new Set(num3)]);  //... spread operators

// 👉how to strat and compare array.
// sorting an array:-the sort method sorts the element of an array 
// in place and returns the sorted array.by default it sorts elements
//  as string.

const fruit = ["Banana","Apple","Grapes","Cherry"];
fruit.sort();
console.log(fruit);

// compare callback function.
// formula
// const sortednumber = numbers.sort((a,b) => a-b);
// if(a>b) return 1 => switch the order
// if(b>a) return -1 =>keep the order.

num3.sort((a,b) => {
    if(a>b) return -1;
    if(b>a) return 1;
})

console.log(num3);


// for assending order.
const sortnumbers = num3.sort((a,b) => {
    if(a>b)
    {
        return 1;
    }
    else if(b>a)
    {
        return -1;
    }
});
console.log(sortnumbers);

// for dessending order.
const sortnumbers1 = num3.sort((a,b) => {
    if(a>b)
    {
        return -1;
    }
    else if(b>a)
    {
        return 1;
    }
});
console.log(sortnumbers1);

// Very important array method.
// 👉map(),filter(),reduce().
// map() creates a new array from calling a function for every array
//  element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


// 👉using map to square each  number and create a new array.
const square = [1,2,3,4,5,6];
let result5 = square.map((currElem) => currElem * currElem);
console.log(result5);

// 👉using the map method write a function that takes an array of 
// strings and returns a new array where each string is capitalized..
const words = ["apple","banana","cherry","Grapes"];
let ans2 = words.map((currElem) => {
    return currElem.toUpperCase();
})

console.log(ans2);

// 👉using map method write a function that takes an array of
//  numbers and return a new array where each  number is squared 
// but only if its an even number.

const no1 = [1,2,3,4,5];
const ans3 = no1.map((currElem) => {
    if(currElem % 2 === 0)
    {
        return currElem * currElem;
    }
}).filter((currElem) => currElem !== undefined)

console.log(ans3);

// 👉using map method write a function that takes an array of names 
// and return a new array where each name is prefixed with "Mr.".

const names = ["Paresh","Jay","Satish"];
const nameresult = names.map((currElem) => {
    return `Mr.${currElem}`
});
console.log(nameresult);

// 👉reduce method() :-
// The reduce method in javascript is used to accumlate or reduce
//  an array to a single value.it iterates over the elements of an 
// array and applies a callback function to each element,updating 
// an accumlator value with the result.the reduce  methods take a 
// callback function as its first argument and an optinal intial
//  value for the accumlator as the second argument.

// write a javascript function that calculates the total price of
//  items in a shopping cart the function should take an array of 
// item prices as input and return the total price.

const productprice = [100,200,300,400,500];
const totalprice = productprice.reduce((accum,currElem) => {
    return accum + currElem;
},0)
console.log(totalprice);



















