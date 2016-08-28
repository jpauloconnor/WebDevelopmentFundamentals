/* 0.011 */
//INTs
1;
1 + 1;
1.1; //Quickly explain that decimals are handled differently by language.
1.1 * 1.1;

/*-----------------------------------------------------------*/
/* 0.012 - Using the console */
//One way, print to the Chrome tools console.
console.log(1);
console.log(1 + 1);
console.log(1.1);
console.log(1.1 * 1.1);

/*-----------------------------------------------------------*/
// 0.013 Operators
//Basic Operators
console.log(5 + 5);
console.log(6 - 6);
console.log(7 * 7);
console.log(8 / 8);

/*-----------------------------------------------------------*/
// 0.015 Modulus Operator
//MODULUS - have them figure it out.
console.log(10 % 5); //Why is it 0?
console.log(10 % 4);



/*use the === operator to show if two values are identical */




//1.8 - A FEW DON'TS
/*** CASE SENSITIVITY MATTERS ***/
//Examples:
//var 2nite = "Tonight"
//console.log(2nite); //won't work. can't start variables with symbols or numbers in JavaScript.

/***AVOID HOISTING***/

console.log(hoisting);
var hoisting = "putting the request above the variable"
//Won't print anything because hoisting does not exist yet.  

/*-----------------------------------------------------------*/
//1.9 Playing with JavaScript in Chrome Tools

//GO TO THE CHROME TOOLS CONSOLE
/*1.) Show them how they can type stuff directly into the console. 
    Do some math.
    about:blank  ---> View --> Developer Tools
                         or Cmd + option + i on mac
                            ctrl + shift + i on windows

    Type in something like this: 
    var luckySevens = 777;  
    luckySevens;
    777

/* Show more options if needed */

/* COUPLE OPTIONS FOR TEACHING MORE INTEGER BASICS:

/* Idea 1:
Lead them to the mozilla docs on operators.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
Show them how to do a = 1; b = 1; 
Have them play around and do math operations in the console. 
Be sure to them play around with compound assignment operators.
*/


/* Idea 2:
You can lead them through challenges before showing them the docs.
1.) a = 1; 
2.) b = 2; 
3.) run a += b; Same as a = (a + b)
4.) Discuss answer: 3 - What does this do? 
5.) Run it again: 5 - Why?
6.) Repeat with other operators.
*/

//Idea 3: They could build a cheat sheet for operators that looks like this:
