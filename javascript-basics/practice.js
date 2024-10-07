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


// 3 . 

