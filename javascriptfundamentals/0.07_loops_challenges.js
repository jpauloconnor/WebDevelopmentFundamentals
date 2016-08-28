/*BRONZE: 
	Create a for loop that counts to 20 by 2s.

SILVER:
	Create a for loop that counts to 100 by 25s.
	When you get to 50, print "Halfway there!"

GOLD: 
	Create a for loop that counts to 10.
	Print each number, 1 through 8, 
	but print 9 & 10 as "nine" & "ten"
*/

//Bronze
for (var i = 2; i < 20; i += 2) {
	console.log(i);
}

var count = 8;
for (var i = 4; i < count; i++) {
	console.log("Count:", i);
}

//Silver
for (var i = 0; i < 101; i += 25) {
	if (i == 50) {
		console.log(i + " " + "Halfway there!")
	} else {
	console.log(i);
	}
}

//Gold - This could probably be harder.
for (var i = 1; i < 11; i++) {
	//console.log(i);
	if (i == 10) {
		console.log("ten");
	} else if (i == 9) {
		console.log("nine");
	} else {
		console.log(i);
	}
}


/*
BRONZE: 
	Write a loop that prints this to the console.	
/* 
#
##
###
####
#####
######
#######
########

SILVER: 
THE BIG JOB INTERVIEW QUESTION:
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” 
instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples
of both three and five print “FizzBuzz”."
	You're console should look like thsi:
		1
		2
		Fizz
		4
		Buzz
		6
		(more numbers in between)
		14
		FizzBuzz


//SERIOUS GOLD: 
This is the hardest problem so far. 
Use a for loop to create a pyramid and render it to an HTML page. See example.
You'll need to create a block object(we haven't learned about objects yet)
You'll need to do some CSS work. Not a whole lot.
Think abou this: You can print out a <div> class as a string and have it print multiple times in the html page.
For example,


*/


//BRONZE ANSWER
for (var i = "#"; i.length < 8; i += "#") {
	console.log(i);
}


for (var line = "la"; line.length < 8; line += "la") {
	console.log(line);
}


//SILVER ANSWER
//FIZZBUZZ - 2x
/*
for (var i = 0; i < 100; i++) {
	if (i % 3 == 0) {
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else if (i % 15 == 0) {
		console.log("FizzBuzz");
	} else {
		console.log(i);
	}
}

// smallest?
for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)  //try reading this.
*/


//GOLD ANSWER - pyramid
/*If you reveal the answer to this, this would be a great time to introduce JSFiddle. This answer comes from here:
//http://jsfiddle.net/Q8KUS/88/
*/
var objContainer = document.getElementById( "container" ),
    intLevels = 10,
    strBlocksHTML = '';

for(var i = intLevels; i > 0; --i ) {
    
    strBlocksHTML += '<div class="buildingBlock" style="width:'+(250-i*20)+'px"></div>';
}
objContainer.innerHTML = strBlocksHTML;


