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
