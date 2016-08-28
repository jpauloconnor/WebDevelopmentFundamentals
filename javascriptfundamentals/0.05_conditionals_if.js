//boolean variables
var isOn = true;
var isHot = false;
//1
if(isOn) {
	console.log("The light is on. It's bright.");
}

//2
if (isOn === true) {
	console.log("The light is on");
}

//3
if (isOn && isHot) {
	console.log("Lights on and it's hot");
}

//4
if (isOn || isHot) {
	console.log("lights on or it is hot")
} 

//5
if(!isHot) {
	console.log("it is not hot")
}


