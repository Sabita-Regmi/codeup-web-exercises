
// ================ SIMPLE FUNCTION DRILLS
// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())
// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())
// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))
// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())
// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value
// ================ CHALLENGE FUNCTION DRILLS
// Write a function called `identity(input)` that takes in an argument called input and returns that input.
// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max
// values sent to that function call.
// Write a function called `first(input)` that returns the first character in the provided string.
// Write a fuction called `last(input)` that returns the last character of a string
// Write a function called `rest(input)` that returns everything but the first character of a string.
// Write a function called `reverse(input)` that takes a string and returns it reversed.
// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is
// numeric.
// Write a function called `count(input)` that takes in a string and returns the number of characters.
// Write a function called `add(a, b)` that returns the sum of a and b
// Write a function called `subtract(a, b)` that return the difference between the two inputs.
// Write `multiply(a, b)` function that returns the product
// Write a divide(numerator, denominator) function that returns a divided by b
// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number`
// by the `divisor`
// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function
// and not + or * operators
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name
// of the math function you want to apply. a and b are the two numbers to run that function on.



// problem 1


function isOdd(number) {
   return  number % 2 !== 0;

}
console.log(isOdd(2));


// problem 2

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(8));


// problem 3

function identity(input) {
    return input;

}

console.log(identity(3));



// problem 4
function isFive(input) {
    return input ===5;


}
console.log(isFive(3));

// problem5

function addFive(input){
    return input+5;
}
console.log(addFive("sabita"));


// problem 6
function isMultipleOf(input){
    return input%5===0;
}
console.log(isMultipleOf(4));

// problem 7

function isThree(input){
    return input===3;
}
console.log(isThree(3));

// problem 8
function isMultipleOf(input){
    return input%3==0;
}
console.log(isMultipleOf(8));

// problem 9
function isMultipleOfThreeAndFive(input){
    return input%3==0 && input%5==0;

}
console.log(isMultipleOfThreeAndFive(20));

//Problem 10
function isMultipleOf(target,n){
    return target%n===0;
}
console.log(isMultipleOf(40,5));

// problem 11
function isTrue(boolean){
    return true;
}
console.log(isTrue(true));

// problem 12
function isFalse(boolean){
    return false;
}
console.log(isFalse(false));

// problem 13
function isTruthy(input){
    return input!==true;
}
console.log(isTruthy(false));

// problem 14

function isFalsy(input){
    return input!==false;
}
console.log(isTruthy(true));

// problem 15
function isVowel(letter){
    return letter==="a" || letter=="e"|| letter=="i" || letter=="o" || letter =="u";
}
console.log(isVowel("b"));
console.log(isVowel("a"));

// problem 16
function isConsonant(letter){
    return letter !=="a" || letter !=="e"|| letter !=="i" || letter !=="o" || letter !=="u";
}
console.log(isConsonant("b"));
console.log(isConsonant("a"));

// problem 17
function isCapital(letter){
    return letter.toUpperCase();
}
console.log(isCapital("r"));


// problem 18
function isLowerCase(letter){
    return letter.toLowerCase();
}
console.log(isLowerCase("S"));

// problem 19
function hasLowerCase(string){
    return string=== string.toLowerCase();
}
console.log(hasLowerCase("strIUng"));
// problem 20 not solved
function isSpace(letter){
    return letter==" ";
}
console.log(isSpace(" "));

// problem 21
function isZero(number){
    return number===0;
}
console.log(isZero(1));

// problem 22

function notZero(number){
    return number!==0;
}
console.log(notZero(1));

// problem  23
function double(n){
    return n*2;
}
console.log(double(3));

// problem 24
function triple(n){
    return n*3;
}
console.log(triple(5));

// problem 25
function quadruple(n){
    return n*4;
}
console.log(quadruple(5));

// problem 26
function half(n){
    return n/2;
}
console.log(half(8));

// problem 27
function subtract(a,b){
    return a-b;
}
console.log(subtract(8,2));

// problem 28
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,4));

// problem 29
function divide(a,b){
    return a/b;
}
console.log(divide(20,5));

// problem 30
function remainder(a,b){
    return a%b;
}
console.log(remainder(23,6));

// problem 32
function cube(n){
    return n*n*n;
}
console.log(cube(3));

// problem 33
function squareRoot(n){
    return Math.sqrt(n);
}
console.log(squareRoot(16));

// problem 34

function cubeRoot(n){
    return Math.cbrt(n);
}
console.log(cubeRoot(125));

// problem 35

// function invertSign(number){
//     return -Math.abs(number);
// }
// console.log(invertSign(-9));

// problem 36
// function degreeToRadians(degree){
//     return Math.radian(degree);
// }
// console.log(degreeToRadians(32));

// problem 37



// problem 38
function isBlank(input){
    return input==="  " || input===" " || input==="a '\\n";
}
console.log(isBlank(" "));

// problem 39
function trimString(string){
    return string.trim();
}
console.log(trimString("  zion  "));

// problem 40
function isEqual(input1,input2){
    return input1==input2;
}
console.log(isEqual(3,"3"));


// problem 41
function isEqual(input1,input2){
    return input1===input2;
}
console.log(isEqual(3,"3"));

//
// // problem 42
// function