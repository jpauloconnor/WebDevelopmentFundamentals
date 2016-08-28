
/*************************************************************/
	/********* 5.7 SWITCH STATEMENTS *********/
/*************************************************************/

//What is a switch statement? Another form of Control Flow that is
//used in numerous different languages, similar to if/else statements.

//Bronze challenge with a Switch statement.

var marginOfColtsSuperBowlWin = 17;
var result;

switch (marginOfColtsSuperBowlWin) {
	case 3:
		result = "Cool, that will be a good game.";
		break;
	case 7:
		result = "I like it. Just close enough.";
		break;
	case 10:
		result = "Yea, that's what I'm thinking.";
		break;
	case 17:
		result = "Sweet. We can just focus on the commercials.";
		break;	
	default:
		result = "I don't know. We'll see what happens.";
}

console.log("Switch Result:", result);



//Another example. 

var packageType = "Kidney transplant for Andrew Luck.";
var ship;

switch (packageType) {
	case "Business":
		ship = "Fed Ex";
		break;    //Must have break.

	case "Personal":
		ship = "UPS Ground";
		break;

	case "Kidney transplant for Andrew Luck":
		ship = "Ambulance on ice with armored escort.";
		break;

	default:
		ship = "USPS";
}

console.log(ship);
packageType = "Business";
console.log(ship);

/** Unique to JavaScript - Not necessary to go over at this point. ***/

var overRatedDinnerAtApplebees = 100.00;
var discountForHorrificService;

switch(true) {
	case overRatedDinnerAtApplebees >= 50 && overRatedDinnerAtApplebees < 75:
		discountForHorrificService = 10;
		break;
	case overRatedDinnerAtApplebees >= 75 && overRatedDinnerAtApplebees < 100:
		discountForHorrificService = 20;
		break;
	case overRatedDinnerAtApplebees >= 100:
		discountForHorrificService = 30;
		break;
	default:
		discountForHorrificService = 0;
}

console.log("Discount for horrific service:,", discountForHorrificService);
