
/*-----------------------------------------------------------*/
// Function Challenges


//All together - Write a function that allows you to enter the cost of all of your bills and it adds them together. 

//Multiple params
function totalBills(rent, water, electric, trash, wireless, phone, daughtersPhone){
	console.log(rent + water + electric + trash + wireless + phone + daughtersPhone);
}

totalBills(5000, 30, 15, 0, 30, 30, 100);
totalBills(5000, 30, 15, 0, 35, 43, 101);


/*
BRONZE: 
	Write a function with two strings as arguments.
	The function should concatentate the string.

SILVER:
	Write a function that will help me easily calculate monthly bills.

GOLD:
Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/

//BRONZE: 
function combineWords(wordOne, wordTwo){
	return wordOne + wordTwo;
}
console.log(combineWords("Diet ", "Coke"))

//SILVER:
function bills(rent, water, electric, trash, wireless) {
	var bills = rent + water + electric + trash + wireless; 
	return bills;
}

console.log("Bills:", bills(600, 30, 30, 10, 30));

//GOLD:
function calculatePrice(quantity, price, item) {
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = quantity * price + totalTax;                                 
	return quantity + " " + item + " will cost you $" + totalPrice;
}
console.log(calculatePrice(132, .88, "Cups of Coffee"));
/*-----------------------------------------------------------*/
