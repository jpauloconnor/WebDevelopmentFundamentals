

/*-----------------------------------------------------------*/
//5.8 - Switch Challenges

/* BRONZE:
	Create a Switch statement for a four star movie rating system. 
*/
var rating = "Basically as good as Die Hard";
var stars;

switch(rating){
	case "Terrible":
		stars = 1;
		break;
	case "Bad":
		stars = 2;
		break;
	case "Meh":
		stars = 3;
		break;
	case "Good":
		stars = 4;
		break;
	case "Basically as good as Die Hard":
		stars = 5;
		break;
}
console.log("The move was", rating, "so I would give it", stars, "stars.")
/*
SILVER: 
	Create a switch statement for anything you want. Show a practical reason to use one.
*/
var position = "Manager";
var pay;
switch(position){
	case "Cashier":
		pay = 8;
		break;
	case "Cook":
		pay = 10;
		break;
	case "Manager":
		pay = 14;
		break;
	case "CEO":
		pay = 1000;
		break;
}
console.log("You are a", position, "so you earn", pay, "dollars per hour");
/*
GOLD CHALLENGE ALTERNATIVE/MORE PRACTICE: 	
	My dad is hiring Seth Godin to come to Indianapolis to speak. 
	Seth has a different kind of charge for speaking.
 	The farther he travels, the higher the fee.
 	He lives in NYC, but if he has to travel by plane for 2 hours,
 	his fee goes up by 10%. If he travels for 4 hours, it goes up 
 	by 20%. I'm not sure what his base fee is, but I'm guessing it's around $10,000.  
	Write a Switch Statement that calculates the cost to hire Seth Godin to come from
	NYC to speak in Indianapolis.  
*/

var travelTime = 2;
var fee = 10000;
switch(travelTime){
	case 0:
		break;
	case 2:
		fee = fee*1.2;
		break;
	case 4:
		fee = fee*1.4
		break;
}
console.log("Seth Godin has to travel for", travelTime, "hours, so his  fee is", fee, "dollars.")
