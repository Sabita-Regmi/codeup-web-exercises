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