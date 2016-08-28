/*-----------------------------------------------------------*/
/* Practice with if - lots of it. */
/*CHALLENGES: 


/*
BRONZE: I want to order some Colts gear online, and I'm not sure 
which courier service to use yet. I want to know which one to use
for Next Day Air, 2 day air, 3 day ground, and whenever. Can you write
an if/else statement that helps me pick the best one? It's just your opinion here.
*/

var order = "Next Day Air";
var courierService;

if (order == "Next Day Air")
	courierService = "Fed Ex";
else if (order == "Two Day Air")
	courierService = "Fex Ex";
else if (order == "Arrive Whenever")
	courierService = "UPS Ground";
else 
	courierService = "USPS";

console.log(courierService);

/*
SILVER: Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. You should
 also deal with the off chance that we don't play at all(i.e., a lockout)
 
 */

var timesWeBeatPatriotsLastSeason = 1;
var timesTheyBeatUs = 2;

if (timesWeBeatPatriotsLastSeason > timesTheyBeatUs) {
	console.log("We are just better at football.");
} else if (timesTheyBeatUs > timesWeBeatPatriotsLastSeason) {
	console.log("Yea, well Andrew Luck was hurt.");
} else if (timesWeBeatPatriotsLastSeason === timesTheyBeatUs) {
	console.log("They were really lucky.");
} else {
	console.log("Patriots just cheat.")
}



/*-----------------------------------------------------------*/
/*GOLD CHALLENGE:
	1. Write a program that prompts your users in the browser to enter a
	number from 1 to 5 about how optimistic they are about the Colts
	next year.
	2. Have a different response for each number. 
*/

//Uncomment when needed. Annoying prompts.

/*
var num = Number(prompt("How do you feel on a scale of 1-5 about the Colts next year? 1 is equal to 1989 and 5 is like 2008.", "5"))
if (num === 1 ) 
	alert("No way. They're not going to be that bad.");
	//prompt("Do you want to set up an appointment with a local therapist?");
else if (num === 2)
	alert("Yea, we'll see how healthy Luck is.");
else if (num === 3 )
	alert("Not bad. So like, lose Wild Card game.");
else if (num === 4)
	alert("Ok. So they'll go to the Superbowl & lose?");
else if (num === 5)
	alert("Yes, I agree. They will be the best team in the league.");
else 
	alert("Hmm. Doesn't look like you entered a number between 1 & 5. Is that a 6? Me too."); 
*/
