
var animal = {
	type : "",
	habitat : "",
	weight  : 0,
	commonInIndiana : false
};

//Creating objects from other objects.
var bear = Object.create(animal);
var cow = Object.create(animal);


//We have five objects now.
//It will have the same default properties as the animal unless we give the properties new values.

bear.type = "Bear";
bear.habitat = "Woods";
bear.weight = 1500;
bear.commonInIndiana = false;

console.log(bear);
console.log(bear.type);
console.log(bear.weight); 


//You try it: Set the properties for cow.
cow.type = "Cow";
cow.habitat = "Farmland";
cow.commonInIndiana = true;
cow.weight = 1500;

//Practice
//Create 2 more animal objects and give them properties.