/*-----------------------------------------------------------*/
// the DOM 

//Functions
/****** RENDERING TO HTML - We'll learn better ways later. ****/

function favoriteBand() {
	document.getElementById("favorite").innerHTML = "Led Zeppelin, of course.";
}

function worstSong(song) {
	document.getElementById("worst").innerHTML = "Anything by the BeeGees";
}

function bestSong(song) {
	document.getElementById("best").innerHTML = "Stairway to Heaven";
}



//SALES TAX CHALLENGE
//These are the functions used for the sales table.

function subTotal() {
  var price = document.orderform.price.value;
  var quantity = document.orderform.quantity.value;
  productPrice = price * quantity;
  document.orderform.subtotal.value = productPrice.toFixed(2);
  return productPrice;
}


function calculateTax() {
  var subTotal = document.orderform.subtotal.value;
  var stax = 0.03;
    tax = subTotal * stax;
  document.orderform.salestax.value = tax.toFixed(3);
  return tax;
}
 
function grandTotal() {
  var subtotal = subTotal();
  var tax = calculateTax();
  document.orderform.subtotal.value = subtotal.toFixed(2);
  document.orderform.salestax.value = tax.toFixed(2);
  var gtotal = subtotal + tax;
  document.orderform.gtotal.value = gtotal.toFixed(2);
}