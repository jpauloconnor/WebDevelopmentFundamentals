
var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

//7
if (elevatorUp === true) {    //Note: You don't have to have the ===
	console.log("Going up");
} else {
	console.log("Going down");
}  

//Write one for elevator broken:
if (elevatorBroken) {    //Note: You don't have to have the ===
	console.log("Bummer. Let's take the stairs.");
} else {
	console.log("Which floor?");
}  

//Write another one for stuck:
if (elevatorStuckWhileWeAreOnIt){
	console.log("Oh no! We're stuck!");
} else {
	console.log("This elevator is fast.");
}

//But maybe we're standing there waiting?
if(elevatorBroken && elevatorDown){
	console.log("I hope this thing doesn't start flying down!");
} else {
	console.log("How long are you in town for?");
}

if(elevatorBroken || elevatorStuckWhileWeAreOnIt){
	console.log("Hi Bob, this is Bob with maintenance. How can I help?");
}

//Using ints and other types
if(elevatorNumber === 13 && elevatorStuckWhileWeAreOnIt){
	console.log("This is not our lucky day!");
}
