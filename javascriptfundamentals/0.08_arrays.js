/************************************************************
*************************************************************
**************   ARRAYS *************************************
*************************************************************
*************************************************************/
/* --  8.1 -- */
/*DEFINTION: Arrays allow us to collect a number of....
Based on this one example, what do you think are some general
rules about arrays.
	Answer can include:
	a type of variable.
	explicit array has parens with declaration
	square brackets that separate items [] in implicit
	As we'll see, arrays and strings are very similar.
	In fact, a string is just an array of characters.
	THey have a lot of the same methods.
											*/
//Could talk about these as a warm up.
var abc = "abcdefghigklmnoprstuvwxyz";
var abcArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(abc.charAt(3)); //What will these print? Trick quesiton. It's d.
//Iterates through the string, starting at 0
console.log(abc[3]);
//Exactly the same, starts counting at 0

console.log("abc array:", abcArray[2]); //And here?



//Array Literals

var emptyArray = [];//empty
var studentArray = ["Fred", "Jordan", "Bobbie"]; //same type
var mixedArray = ["Paul", 1, (39<40)]; //mixed(JS only)


//Important fact - Arrays start at 0
					//0        1        2
var countryArray = ["USA", "Russia", "China"];

//Accessing items
console.log(studentArray[1]); //1 item
console.log(mixedArray); // all items

//Knowing the .length method is key for later
console.log(mixedArray.length); //Gives the number of items in the array.


//Adding to an array - use  .push() ->This is a prebuilt function that needs a paramter.
studentArray.push("John");
console.log(studentArray); //Now has another person.

//Taking something away
countryArray.pop("China");
console.log(countryArray); //Only has two values now

/* --  8.2 -- */
//Creating an array - Arrays are variables
var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";

var typesOfCheese = ["Gouda", "Mozarella", "Havarti"]

//4 ways to create arrays. What's the difference? 
//#1
var ourFirstArray = new Array();

//#2
var importantHolidays = new Array("New Years Day", "July 4th", "Halloween", "Thanksgiving");

//#3
var dayArray = new Array(365);

//#4
var typesOfOwls = ["Great Horned", "Barn", "Saw-het", "Pygmy"]

//Call each one of these here or in the console.
console.log(ourFirstArray);
console.log(importantHolidays);
console.log(dayArray);
console.log(typesOfOwls);

//#5 
var mixedTypeArray = [1, "Bill Gates", (5 > 2)]; //What's going on with this one? 
console.log(mixedTypeArray);
//Not able to do this in a lot of other languages. 

/*-----------------------------------------------------------*/
/* --  8.3 -- */
/* Explain array indexes...
	typesOfCheese[0] = "Gouda";
	typesOfCheese[1] = "Mozarella";
	typesOfCheese[2] = "Havarti";

					*/
//What will each of the following items print out?
console.log(importantHolidays[0]);
console.log(mixedTypeArray[3]);			 //NOTE: Trick question - There is no 3.


//Your turn - Write 3 arrays. 




