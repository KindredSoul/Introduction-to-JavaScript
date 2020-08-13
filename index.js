/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
let age = 26;
if (age > votingAge) {
	console.log('true');
} else {
	console.log("You're too young");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let pie = 'flavor';
if (pie !== 'cherry') {
	pie = 'cherry';
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string = '1999';
Number(string);

//Task d: Write a function to multiply a*b

function multiply(a, b) {
	let product = a * b;
	return product;
}

multiply(3, 7);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
let myAge = 25;
function oldDoge(age) {
	let dogeAge = age * 7;
	return dogeAge;
}
oldDoge(myAge);

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

function dogeFeeder(weight, age) {
	let feedingReq;
	if (age >= 1) {
		if (weight <= 5) {
			feedingReq = `${weight * 0.05} or 5% of their body weight`;
		} else if (weight >= 6 && weight <= 10) {
			feedingReq = `${weight * 0.04} or 4% of their body weight`;
		} else if (weight >= 11 && weight <= 15) {
			feedingReq = `${weight * 0.03} or 3% of their body weight`;
		} else {
			feedingReq = `${weight * 0.02} or 2% of their body weight`;
		}
		return feedingReq;
	} else if (age > 0 && age < 1) {
		if (age >= 0.24 && age < 0.48) {
			feedingReq = '10% of their body weight';
		} else if (age >= 0.48 && age < 0.84) {
			feedingReq = '5% of their body weight';
		} else if (age >= 0.84 && age < 1) {
			feedingReq = '4% of their body weight';
		}
		return feedingReq;
	}
}

dogeFeeder(15, 1);

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function letsPlay(yourChoice) {
	var choice = Math.round(Math.random() * 10);
	let myChoice;
	if (choice === 1 || choice === 4 || choice === 7) {
		myChoice = 'rock';
	} else if (choice === 2 || choice === 5 || choice === 8) {
		myChoice = 'paper';
	} else if ((choice = 3 || choice === 6 || choice === 9)) {
		myChoice = 'scissors';
	}
	console.log(myChoice);
	if (yourChoice == 'scissors') {
		if (myChoice === 'scissors') {
			console.log('TIE!');
			return 'TIE!';
		} else if (myChoice === 'rock') {
			console.log('I WIN!');
			return 'I WIN!';
		} else if (myChoice === 'paper') {
			console.log('YOU WIN!');
			return 'YOU WIN!';
		}
	} else if (yourChoice == 'rock') {
		if (myChoice === 'rock') {
			console.log('TIE!');
			return 'TIE!';
		} else if (myChoice === 'paper') {
			console.log('I WIN!');
			return 'I WIN!';
		} else if (myChoice === 'scissors') {
			console.log('YOU WIN!');
			return 'YOU WIN!';
		}
	} else if (yourChoice == 'paper') {
		if (myChoice === 'paper') {
			console.log('TIE!');
			return 'TIE!';
		} else if (myChoice === 'scissors') {
			console.log('I WIN!');
			return 'I WIN!';
		} else if (myChoice === 'rock') {
			console.log('YOU WIN!');
			return 'YOU WIN!';
		}
	}
}
letsPlay('rock');
letsPlay('rock');
letsPlay('rock');
letsPlay('paper');
letsPlay('paper');
letsPlay('paper');
letsPlay('scissors');
letsPlay('scissors');
letsPlay('scissors');

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kiloToMiles(km) {
	let convert = km * 0.621;
	console.log(`${convert} mile(s)`);
	return convert;
}
kiloToMiles(7);
kiloToMiles(1);
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCenti(ft) {
	let convert = ft * 30.48;
	console.log(`${convert} centimeter(s)`);
	return convert;
}
feetToCenti(1);
feetToCenti(6);

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(number) {
	for (let i = 0; i <= number; i++) {
		let newNumber = number - i;
		if (i !== number) {
			console.log(
				`${newNumber} bottles of soda on the wall, ${newNumber} bottles of soda, take one down pass it around ${newNumber -
					1} bottles of soda on the wall!`
			);
		} else {
			console.log('Finally! No more bottles!');
		}
	}
}
annoyingSong(3);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function myGrade(number) {
	let grade = number / 100 * 100;
	if (grade < 60) {
		console.log('You recieved an F! Back to the drawing board!');
	} else if (grade <= 60 && grade < 70) {
		console.log('You recieved an D! Cutting it close!');
	} else if (grade <= 70 && grade < 80) {
		console.log('You recieved an C! Not bad kid!');
	} else if (grade <= 80 && grade < 90) {
		console.log('You recieved an B! Nicely done!');
	} else if (grade <= 90 && grade < 100) {
		console.log('You recieved an A! Top marks!');
	} else if (grade === 100) {
		console.log('You recieved an A+! You achieved the pinnacle of perfection!!');
	}
}
myGrade(100);
myGrade(53);
myGrade(75.6);
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
