// ---CHAPTER 1 ---
// 1 . Create a variable of type string and try to add a number to it
let myVar = 'my string';
myVar += 13;
console.log(myVar);

// 2 . Use typeof operator to find the datatype of the string in the last question
console.log(typeof myVar);

// 3 . Create a const object in javascript, can it be changed to hold a number later
const myObj = {
	name: 'const obj',
	'type': 'object',
}

myObj.name = 13;
console.log(myObj)  //The content of a const object can change 

// 4 . Try to add a new key to the const object in Problem
myObj.varType = 'string';
myObj['addNew'] = 9;  
console.log(myObj.varType);
console.log(myObj['addNew']);   // the aboves added a new key and value(properties) to the object
console.log(myObj);

// 5. Write a js program that creates a word-naming dictionary of % words
function wordMeaning(word){
	if (word == 'closure'){
		return 'Closure refers to the resolution or conclusion of an experience, situation, or process'
	}
	else if (word == 'due diligence'){
		return 'Due diligence means taking the time to carefully review and consider the content, ensuring accuracy, clarity, and appropriateness, in order to avoid misunderstandings or errors.'
	}
	else if (word == 'prompt'){
		return 'Prompt refers to something done immediately or without delay'
	}
	else if (word == 'detest'){
		return 'Detest means to intensely dislike or have a strong feeling of hatred or aversion towards something or someone'
	}
	else if (word == 'grit'){
		return 'Grit refers to perseverance and resilience in pursuing long-term goals, often characterized by determination, passion, and the ability to overcome challenges and setbacks.'
	}
	else {
		return 'Word doesnt exist in dictionary'
	}
}

console.log(wordMeaning('closure'));


		//Using object
const dictionary = {
	'closure': 'Closure refers to the resolution or conclusion of an experience, situation, or process',
	'due diligence': 'Due diligence means taking the time to carefully review and consider the content, ensuring accuracy, clarity, and appropriateness, in order to avoid misunderstandings or errors.',
	'prompt': 'Prompt refers to something done immediately or without delay',
	'detest': 'Detest means to intensely dislike or have a strong feeling of hatred or aversion towards something or someone',
	'grit': 'Grit refers to perseverance and resilience in pursuing long-term goals, often characterized by determination, passion, and the ability to overcome challenges and setbacks.'
};

function wordMeanings(words) {
	return dictionary[words] || 'Word doesn’t exist in dictionary';
}

console.log(wordMeanings('grit')); // Call the function and log the result





// --- CHAPTER 2 ---
// 1 . Use logical operators to find whether the age of a person lies between 10 and 20

function ageGap(age){
	if (age >= 10 && age <= 20){
		return `He/She is ${age} years old`;
	} 
	else if (age < 10 || age > 20){
		return `you\'re ${age} - it\'s either you\'re underaged or overaged`;
	}
	else{
		return 'input age again';
	}
}

console.log(ageGap(17));
console.log(ageGap(25));


// 2 . Demostrate the use of switch case in Javascript
function ageGap(age) {
    switch (true) {
        case (age >= 10 && age <= 20):
            return `He/She is ${age} years old`;
        case (age < 10 || age > 20):
            return `You're ${age} - it's either you're underaged or overaged`;
        default:
            return 'Input age again';
    }
}

console.log(ageGap(15));  // Output: He/She is 15 years old
console.log(ageGap(8));   // Output: You're 8 - it's either you're underaged or overaged
console.log(ageGap(25));  // Output: You're 25 - it's either you're underaged or overaged


// 3 . Write a javascript program to find whether a number is divisible by 2 and 3
function divtat(num){
	if(num % 2 === 0 && num % 3 === 0){
		return 'This number is divisible by 2 and 3'
	}
	else{
		return 'This number isnt divisible by 2 and 3'
	}
}

console.log(divtat(17));
console.log(divtat(6));


// // 4 . Write a javascript program to find whether a number is divisible by 2 or 3
function divtot(numb){
	switch (true){
		case (numb % 2 === 0 || numb % 3 === 0):
			return 'This number is divisible by 2 or 3';
		default:
			return 'This number isnt divisible by 2 or 3'
	}
}
console.log(divtot(12));
console.log(divtot(13));


// 5 . Print "You can Drive" or "You cannot drive" based on age greater than 18, in ternary operator
function drivingAge(ageLimit) {
    return ageLimit >= 18 ? 'You can Drive' : 'You cannot drive';
}

console.log(drivingAge(16));
console.log(drivingAge(57));





// --- CHAPTER 3 ---
// 1 . Write a program that prints the mark of a student in an object using for loop

const studentMark = {
	'Harry': 98,
	'Rohan': 70,
	'Aakash': 7
}

const printMark = () => {
	// Use Object.keys() to iterate over the keys of the object
	for (let i = 0; i < Object.keys(studentMark).length; i++) {
		const student = Object.keys(studentMark)[i]; // Gets student name
		console.log(`${student}: ${studentMark[student]}`); // Prints student's mark
	}
}

printMark();

/*
Iteration Method: Use Object.keys(studentMark) to get an array of the keys (student names) in the object, allowing you to iterate over them with a for loop.
Length Calculation: Change the loop condition to < Object.keys(studentMark).length instead of <= to avoid going out of bounds.
Accessing Values: Inside the loop, access the value using the student name from the keys array.
*/



// 2 . Write the program above using For in Loop

const printMarks = function(){
	// saves studentMark into Students variable
	for (let students in studentMark){
		console.log(`${students}: ${studentMark[students]}`); 
		//prints in this format:- student: mark
	}
}

printMarks();

/*
The logic behind the console.

- In the loop, 'students' represents the current key (or property name) of the studentMark object during each iteration. It could be 'Harry', 'Rohan', or 'Aakash'.

- studentMark[student], uses bracket notation to access the value associated with the current student key in the studentMark object.
This retrieves the corresponding mark for that student (e.g., studentMark['Harry'] returns 98).*/



// 3. Write a program that prints 'try again' until user enters the correct number

function appropriateNum(numEntered) {
	return numEntered < 0 ? 'try again' : 'number is valid';
}

console.log(appropriateNum(-3));
console.log(appropriateNum(45));



// 4. Write a function to find the mean of 5 numbers
function findMean(num1, num2, num3, num4, num5){
	return (num1 + num2 + num3 + num4 + num5) / 5;
}

console.log(findMean(2, 13, 27, 8, 19));