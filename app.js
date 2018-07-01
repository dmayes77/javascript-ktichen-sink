var name = 'David';
const states = 50;
var sum = 5 + 4;

//Write some code so that if your name starts with a letter after L
if (name.charCodeAt(0) < 76) {
	alert('Back of Line!');
} else {
	alert('Next!');
}

//Write a function called sayHello that displays an alert that says Hello World!
function sayHello() {
	alert('Hello World!');
}
//Call the sayHello function
sayHello();

//Write a function called checkAge that takes two arguments: one for a name and one for an age. If the age is less than 21, display an alert that says "Sorry {{{toMarkdown}}}name{{{toMarkdown}}}, you aren't old enough to view this page!"
function checkAge(name, age) {
	if (age < 21) {
		alert('Sorry ' + name + " , you aren't old enough to view this page!");
	}
}
//Call the checkAge function 4 times
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

//Create an array of your favorite vegetables and name it accordingly.
var favVeggies = ['corn', 'broccoli', 'carrots', 'cabbage'];
//Use a loop to display each of your favorite vegetables to the developer console.
for (var i = 0; i < favVeggies.length; i++) {
	console.log(favVeggies[i]);
}

//Create an array of 5 objects that contain name and age properties
var people = [
	{ name: 'April', age: 39 },
	{ name: 'Anthony', age: 21 },
	{ name: 'Deion', age: 14 },
	{ name: 'Breslynn', age: 6 },
	{ name: 'Beckham', age: 4 }
];

//Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.
for (var i = 0; i < people.length; i++) {
	checkAge(people[i].name, people[i].age);
}

//Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.
function getLength(String) {
	return String.length;
}
//Call the getLength function, passing 'Hello World' as the argument. Store the returned result of that function in a variable.
let length = getLength('Hello World');

//Check the number in the variable from the previous objective
if (length % 2 === 0) {
	console.log('The world is nice and even!');
} else {
	console.log('The world is an odd place!');
}
