// You WILL use else if all the time.
// Allows you to take care of more than two conditions.
// Here's a relatively cliche example to show how it works.

var x = 1;
var y = 10;

if (x > y) {
	console.log("x is greater.");
} else if (y > x) {
	console.log("y is greater.");
} else if (y === x) {
	console.log("x and y are equal.");
} else {      //-----> The else will always be last.
			  // Notice that it's a catch-all, and you don't need to add a condition with it.
	console.log("Are you sure that these two things are numbers?")
}

// CHALLENGE: Create the same problem, except now do it with 3 variables.
// How many conditions can you come up with in 5 minutes. (a, b, c)
var a = 1;
var b = 2;
var c = 10;
//There is probably a much simpler way to do this, but it's for the students to see.
//Start them out with this.  if ((a > b) && (b > c))
 

if ((a > b) && (a > c)) {
	console.log("a is greater than b & c.");
} else if ((a < b) && (a < c)) {
	console.log("a is less than b & less than c.");
} else if ((a < b) && (a > c) && (c < b)) {
	console.log("a is less than b & greater than c.");
} else if ((a < b) && (a > c) && (c < b)) {
	console.log("a is less than b & greater than c.");
} else {
	console.log("Are you sure we're dealing with numbers?");
}

