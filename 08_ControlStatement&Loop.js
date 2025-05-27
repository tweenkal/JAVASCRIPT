// 👉Conditional statement:-
//  👉If statement , If Else
// 👉If Else , switch , while , for , do while 
// for in /  for of loop(Later in array)

//  👉If Else:-

var temp = 25;
if(temp > 30)
{
    console.log("Lets go to beach");
}
else if(temp > 20 && temp < 10)
{
    console.log("Lets watch Tv");
}
else
{
    console.log("Good Bye");   
}

// 👉Interview Questios:-
// 👉If the person is 18 years or older,a citizen, and registered to
//  vote display a message saying they are eligible to vote.
// 👉If the person is younger than 18 not a citizen ,or not 
// registered to vote display a message saying they are not 
// eligible for vote.
// 👉If the person is 18 or older but not a citizen dispaly a
//  message saying they are not eligible due to citizenship status.
// 👉If the person is 18 or older a citizen but not registerd to 
// vote display message saying they are not eligible due to 
// registration status.
// 👉Extended voting eligiblity checker with a additional conditions.

let age = 12;
let iscitizen = true;
let isregistered = false;

if(age >= 18)
    if(iscitizen)
        if(isregistered)
        {
            console.log("They are eligible for vote");
            
        }
        else
        {
            console.log("You not eligible due to registration status.");
        }
    else
    {
        console.log("You are not eligible for due to citizenship status"); 
    }
else
{
    console.log("You are not eligible for vote(Younger)");
}


// 👉write a programe to check if a number is even or odd.

let number = 3;
if(number % 2 == 0)
{
    console.log("Even number");
}
else
{
    console.log("Odd number");
}

// 👉Write a programe to check if number is prime
// 👉here number is divided 2 and reminder is 0 then it is a not 
// prime and number is not divided any number its prime.

var num = 12;
isprime = true;

for(i=2 ; i < num ; i++)
{
    if(num % 2 == 0)
    {
        isprime = false;
        break;
    }
}

if(isprime)
{
    console.log("Prime");
}
else
{
    console.log("Not prime");
}




//👉write a programe to check 

var num = 0;

if(num > 0)
{
    console.log("Number is positive");
}
else if(num < 0)
{
    console.log("Number is nagative");
}
else
{
    console.log("Number is Zero");    
}

//👉Swith statement:-
// The switch statement is used to perform different actions based
//  on different condition.

// 👉Explain how the swith statement  works and what will be the 
// output when the  variable day is set different to different values.

var day = "Monday";

switch(day)
{
    case "Monday":
        console.log("This is the Monday");
        break;  

    case "Tuesday":
        console.log("This is the Tuesday");
        break;

    case "Sunday":
        console.log("This is Sunday");
        
    default:
        console.log("Invalid");
}

// 👉Interview Questions:-
// 👉Write a javascript switch statement that tackes a variable 
// areaOfShapes representing different shapes,and based on its
//  value,calculate and logs the area of the corresponding shape.
// consider three shapes:'Rectangle','Circle' and 'Square'.for 
// 'Rectangle' use variable a and b as the sides;for 'Circle' use
//  a variable r as the radius and for square use variable a as the 
// side length.if the provided shape is not recognized,log a message 
// saying 'sorry the shap is not available'.Test your switch
//  statement with areaOfShapes set to square and sides a and b 
//  is 5 and 10,resoectively.Ensure that the correct area
// (25 in this case) is logged to the circle. 


var areaOfShapes = "Circle";
var a = 5;
var b = 10;
var result;

switch(areaOfShapes)
{
    case "Square":
        result = a * a;
        console.log("Square is",result);
        break;
        
    case "Rectangle":
        result = a * b;
        console.log("Rectangle=",result);
        break;

    case "Circle":
        var r = 2;
        result = 3.14 * r * r;
        console.log("Circle=",result);
        break;

    default:
        console.log("Sorry the shape is not available");
}


// 👉Loop:-
// 👉While loop:-
// 👉A while loop in javascript is a control structure that
//  ripitadly execute a bloack of code as long as a specified 
// condition remains true.the loop continues iterating while the 
// condition is true and it terminates when the condition becomes
//  false.

// 👉simple while loop to count from 1 to 10.

var num = 1;
while(num <= 10)
{
    console.log(num);
    num++;
}

// 👉Lets create a table of 5.
var num=1;
while(num<=10)
{
    console.log("5 * " + num + " = " + 5 * num);
    num++;
}


// 👉do while loop:-
// 👉a do while loop in javascript is simillar to a while loop.
// but it guaranties that the loop body will be executed at least 
// once before checking the loop condition.the loop continues to 
// execute while the specified condition is true and it terminates 
// when the condition become false.

var num = 1;
do
{
    console.log(num);
    num++;
}
while(num <= 10);


// 👉for loop:-
for(var i=1;i<=10;i++)
{
    console.log(i);
}

// 👉Validating user input with a do..while loop(user need to write 
// a valid number )

// let userinput;
// let positivenumber; 
// do
// {
//     userinput = prompt("Enter a positive number=");
//     positivenumber = parseFloat(userinput);
// }
// while(isNaN(positivenumber) || positivenumber < 0);
// console.log("You are enter valid positive number is=",positivenumber);


// using for loop print table 8
for(var i=1;i<=10;i++)
{
    console.log("8 * " + i + " = " + "8" * i);
}


// for (;;){} this is give the infinite loop.

// 👉Interview questions:-
// 👉calculte a sum of number from 1 to 10 using for loop.

var sum=0;

for(var num=1;num<=10;num++)
{
    var sum = sum + num;
}
console.log("Sum=",sum);

// 👉programe to check if year is leap year if a year is divisible
//  by 4 and not divisible by 100 or if a year is divisible by 400.

var year = 2023;
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
{
    console.log("It is a leap year");
}
else
{
    console.log("It is not leap year");
}

// 👉for loop pattern

// *
// * * 
// * * *
// * * * *
// * * * * *

for(var i=1;i<=5;i++)
{
    var line = "";
    for(var j=1;j<=i;j++)
    {
        line += (" *");           
    }
    console.log(line);   
}