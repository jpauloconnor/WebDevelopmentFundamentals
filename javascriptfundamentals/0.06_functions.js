/************************************************************
*************************************************************
*************************FUNCTIONS **************************
*************************************************************
*************************************************************/

//7.1 FUNCTIONS 
/* 
Executes some action or actions. 
lifeblood of your program. 
Used everywhere!
Allows us to reuse code.
Examples:
If I want to greet every user that comes to my site,
I don't want to write the code over and over for each user.
Math examples
Etc.
*/

//add when needed
var globalNumber = 1000;


/*-----------------------------------------------------------*/
//0.071 - Declaring functions
// You can use the function keyword first.

function hello() {
	console.log("Hello World!");
}

//Calling a function
hello();

//Another way to declare
var hey = function(){
	console.log("hey!");
}

hey();

//Explain the keywords, the parens, and the call.
function printOneNumber(){
	console.log(1);
}
printOneNumber();

//Have them write a couple practice ones.


/*-----------------------------------------------------------*/
//0.072 - Scope & Variables inside of functions
function addNumbers(){
	var x = 10;
	var y = 1;
	console.log(x + y);
}

function multiplyNumbers(){
	var x = 1;
	var y = 2;
	console.log(x * y);
}

addNumbers();
multiplyNumbers();

//Again, have them practice with division & subtraction.

/*-----------------------------------------------------------*/
//0.073 - Parameters
//Explain paramters.

function numberEntered(x){
	console.log("The number you entered was: ", x);
}

//call must now have a value
numberEntered(5);

//Two params
function addTwoNumbers(x, y){
	console.log(x + y);
}

addTwoNumbers(4, 5);
addTwoNumbers(6, 11);
addTwoNumbers(7, 8);


function addMoreNumbers(firstNum, secondNum){
	console.log(firstNum + secondNum);
}

addMoreNumbers(5, 7);



//Return keyword
function mood(){
	return "I'm doing great";
}
mood();

function add(x, y){
	return x + y;
}

add(1, 1);

function fullName(first, last){
	var wholeName = first + " " + last;
	return wholeName;
}

fullName("Paul", "O'Connor");

//Function that returns your pet's name and breed.
function petNameAndBreed(name, breed){
	var petDetails = name + ", " + breed;
	console.log(petDetails);
	return petDetails;
}
petNameAndBreed("Sansa", "Generic");
petNameAndBreed("Mr. SnuffleFluTheTrex", "Trex");

function calculatePriceIndiana(quantity, price){
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;
	return totalPrice;
}

calculatePriceIndiana(17, 5);

//Write a function that prints "Pacers won!" to the console.

function pacersWon(){
	console.log("Pacers won!");
}
pacersWon();
//Write a function that prints to the console: "Steph Curry was the high scorer this year in the NBA." Make it so that you have a name paramter, and you can pass in a the name Steph Curry.

function highScorer(name){
	console.log(name + " was the high scorer this year in the NBA.");
}
highScorer("Steph Curry");
highScorer("Reggie Miller");


/* What happens if we call the function 5 times. */
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

//We can place this in a loop to make it easier

for(var i = 0; i < 5; i++){
	pacersWon();
}
