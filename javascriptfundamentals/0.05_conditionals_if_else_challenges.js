
//CHALLENGE: WRITE YOUR OWN CONDITIONAL WITH SOME KIND OF 
// STORY OR THEME LIKE THE ELEVATOR One



// Come up with Everyday uses for conditionals in code. 
//Come up with a simple example: 

var total = 99.99;
var freeshipping;  //Declare a variable without initialization.
var savings;

if (total === 100.00) {
	freeshipping = true; //Variables can later be initilized here
	savings = 29.99;
} else {
	freeshipping = false; //Or here
	savings = 0;
}
console.log("Savings:", savings);

/*-----------------------------------------------------------*/

//Challenge:
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.
var bankAccount = 5000;
var debt = 4200;
var difference = bankAccount - debt;

console.log("I have $" + bankAccount + " in my bank account, and I am $" + debt + " in debt.");
  	
if ((bankAccount - debt) > 700) {
		console.log("I have some extra money. I should pay off my debt. I'll have $" + difference + " leftover.");	
	} else {
		console.log("It probably isn't a good time to pay off my debt.");
}  		
