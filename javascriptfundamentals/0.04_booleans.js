//Booleans are easy starting out.

var tired = false;
var awake = true;
var hungry = true;
var sad = false;
var happyToWorkWithAGreatGroup = true;
var corny = true;

console.log(corny);

//Have them write a few booleans. 

//Comparison
//Operators

2 > 1;
3 < 2;
var test = 2 >= 3; //What will this print?
console.log(test);

console.log("Two is greater than one? " + (2 > 1));
console.log(3 >= 1);



//Some other operations to see when dealing with equality.


//When checking for equality, you always want to use === over == in JavaScript. 
2 == "2"				//----> true
2 === "2"				//----> false


2 === 2        		    //----> true
1 + 1 === 2	   		    //----> true
[1+0, 1+1] === [1, 2]   //----> true

"Paul" !== "John" 	    //=> true

1 !== 2				    //=> true
10 !== 10			    //=> false


//Research the difference between =, ==, === in JS
var one = 1;
var stringOne = "1";
console.log("Two equals?", one == stringOne);
console.log("Three equals?", one === stringOne); //3 is very safe and compares type and value

//Other important operators
console.log("&& :", 2===2 && 1===1 );
console.log("&& :", 2===2 || 2===1 );
console.log("!=", 2 != 1) //true 2 is not equal to 1





