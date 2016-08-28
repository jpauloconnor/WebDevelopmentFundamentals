//for loops


//STUDENTS: YOU WILL USE THESE A LOT!!!!


//What if we wanted to print a range of numbers all the way to 100.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

/*
That would be really annoying.
That's going to take a lot of space and time to write out.
*/

//For Loops take care of this in no time.

//DEMO
for (var i = 1; i < 50; i += 5) {
	console.log(i);
}


/*
	for (setup; test expression; increment) {
		body;	
	}
	Show a simple diagram:
	http://www.dummies.com/how-to/content/the-4-parts-of-every-for-loop-in-c.html
*/


for ( var i = 1/*variable/index section*/; i <= 10/*conditional section*/;i++/*increment*/){
	console.log("Number:", i);
}

//Practice
for(var i = 0; i <= 50; i+=5){
	console.log(i);
}

for (var i = 20; i > 1; i--){
	console.log(i);
}

//write a for loop that starts at 3, and increments by 5, but doesnt go over 30
for(var i=3;i<30;i+=5){
	console.log(i)
}


