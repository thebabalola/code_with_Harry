console.log('Hello Harry');

/* Javascript is a dynamically typed programming language 
	(that is values stored in a variable can be changed to any type - onlike C language which is static)*/
let a = 45;
a =98;
console.log(a);


/* 
7 Primitive Data Type 
N - Null
N - Number
S - Symbol
S - Strings
B - BigInt
B - Boolean
U - Undefined

Object - is also a data type (but a non-primitive data type)
*/

let b = '97';
console.log(typeof b); //output: sting

let c ;
console.log(typeof c); //output: undefined

let d = null;
console.log(typeof d); //output: null


const myObj = {
	name: 'Harry',
	isMarried: false,
	age: 23,
	'Account Balance': 56.67
};
console.log(myObj.name) //ouputs: Harry
console.log(myObj['Account Balance'])  //outputs: Account Balance



// Incrementation
let x = 15;
console.log(++x) // outputs: 16 (i.e increment x to by 1 before printing it)

let y = 15;
console.log(y++) // outputs: 15 (i.e prints y first,  before incrementing it)



// Understanding the equality sign in javascript 
let num = '5';

if (num == 5){
	return true;
} //5 == '5' - true (because '5' is coerced to 5 before comparison)

else if (num === 5){
	return false;
} //5 === '5' - false (because 5 is a number and '5' is a string)

console.log(num)

/*
== allows type coercion (converts the values to a common type before comparison).
=== checks for strict equality (both value and type must be the same).
*/


// Logical
  !num // if it true result becomes false, and if it false result becomes true