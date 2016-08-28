/************************************************************
*************************************************************
******************** LESSON : STRINGS ********************
*************************************************************
*************************************************************/

//0.030 - STRINGS DEFINTION
/*SEGUE: HOW DO WE DEAL WITH TEXT IN JS? And other programming languages? 
Answer: Strings
Strings - a group of characters "strung" (concatenated/added) together.
Strings - must go in quotes. 
*/

//String examples

"I was born in Indianapolis.";
"I've lived in three states.";
"I like Indiana the best.";
"My bank account had two million bucks in it.";


/*-----------------------------------------------------------*/
/*0.031 - STRINGS & THE CONSOLE
We've created a string, but just like with Integers this won't print anything or save anything anywhere.
Just like before, we can use console.log to print it to the console.*/
console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");


/*-----------------------------------------------------------*/
//0.032 VARIABLES
//Just like integers, we need the var keyword as a container.
var birthCity = "Indianapolis";
var birthState = "Indiana";
var birthPlace = birthCity + ", " + birthState;

/*-----------------------------------------------------------*/
//0.033 NUMBERS IN A STRING
//You can use numbers in a string, but you won't be able to do math operations.
//Treated as text.
var birthDay = "August 11";

/*-----------------------------------------------------------*/
//0.034 - Concatenating and adding two variables together.

//When we add 2 strings together, it's called, "Concatenation".

console.log(birthCity + birthState);

/* QUICK CHALLENGE: See if you can figure out how to get the space to show 
Indianapolis, Indiana?*/

console.log(birthCity + ", " + birthState);
//Or create a variable. Challenge, what's another way to do this?

var commaWithSpace = ", "
console.log(birthCity + commaWithSpace + birthState);

/*-----------------------------------------------------------*/
//3.6 - String + Integers
var highSchool = "Carmel High School";
var graduatedHighSchool = 1994;
console.log(highSchool + commaWithSpace + graduatedHighSchool);
//We can mix strings and integers together.
console.log("My age in August:", ageInAugust);

/*-----------------------------------------------------------*/
//3.7 SINGLE QUOTES, DOUBLE QUOTES, & QUOTES INSIDE OF QUOTES
var myInstruments = 'bass guitar'; //Strings can be in single quotes. 
								   //Just be consistent throughout the project

var song1 = "\"Two Tickets to Paradise\" is the worst song of all time.";
var song2 = '"All Along the Watchtower" is the greatest song from the 60s';

//Adding a \ before Quotes or any other operating keyword allows you to 
//insert them as a string, not an operator.


/*-----------------------------------------------------------*/
//3.9 - Manipulating the Dom JavaScript style(jQuery later)
document.getElementById("birthplace").innerHTML = birthPlace;
document.getElementById("birthday").innerHTML = birthDay;
document.getElementById("highschool").innerHTML = highSchool;
document.getElementById("ageinaugust").innerHTML = ageInAugust;
//These change the conent of what is in the HTML object.
// Challenge: 
//Write a string that has two variables. Output I graduated from Carmel High School in 1994.

var gradYear = 1994;
var highSchool = "Carmel High School";

console.log("I graduated from " + highSchool + " in " + gradYear + ".");

