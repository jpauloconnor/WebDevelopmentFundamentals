/*-----------------------------------------------------------*/
//0.02 Variable Intro

//Variables Demo
var x = 1;
console.log(x);

/*-----------------------------------------------------------*/
//0.021 Assignment
// Think back to algebra and how you "assign" values to a x or y
var y = 9;
var z = x + y;
console.log(z);

/*-----------------------------------------------------------*/
//0.022 Naming
//Name variables anything
var age = 40;
var spaghetti = 1000;

/*-----------------------------------------------------------*/
//0.23 Camel Casing 
var numberOfGrammysIHaveWon = 0; 
var myBirthYear = 1976;
var newNumber = (z * numberOfGrammysIHaveWon);


/*-----------------------------------------------------------*/
//0.24 - Shorthand Operators

/*************************************************************
	 Operator ***** Example ***** Equivalent *****
    	+=		|    a += b   |    a = a + b   | 
    	-=		|    a -= b   |    a = a - b   | 
    	*=		|    a *= b   |    a = a * b   | 
    	/=		|    a /= b   |    a = a / b   | 
    	%=		|    a %= b   |    a = a % b   |   
              *****         *****            *****
*************************************************************/
age += 1;
//same as 
age = age + 1;
age -= 20;
console.log(age);

spaghetti %= 100;
console.log(spaghetti);

/*-----------------------------------------------------------*/
//0.25 - Using the var for a value interchangeably

var ageInAugust = age + 1;  //What will you get here?
var eleven = 11;

console.log(eleven * eleven); //What will the answer be?

var nineteen = 19;
console.log(age - nineteen); //What will the answer be?
