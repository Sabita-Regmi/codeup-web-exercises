"use strict"

// problem 1
function returnTwo() {
    return 2;
}

console.log(returnTwo());

// problem 2
function sayHowdy() {
    console.log("Howdy!");
}

sayHowdy();

// 3
function returnName() {
    return "Sabita Regmi Poudel";
}

console.log(returnName());

// 4
function addThree(number) {
    return number + 3;
}

console.log(addThree(5));

// 5

function sayString(String) {
    return String;
}

console.log(sayString('codeup'));


// Challange functions

// problem 1
function identity(input) {
    return input;
}

console.log(identity("input"));

// problem 3

function first(string) {
    return string.substring(0, 1);

}

console.log(first("roshan"));

// problem 2
function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);

}

console.log(getRandomNumber(200, 300));

// problem 4
function last(input) {
    return input.slice(-1);
}

console.log(last("zion"));

// problem 5

function rest(string) {
    return string.substring(1);

}

console.log(rest("roshan"));

// problem 6
function reverse(input) {
    return input.split("").reverse().join("");
}

console.log(reverse("zion"));

// problem 7
function isNumeric(input) {
    return input === parseInt(input);
}

console.log(isNumeric(123));

// Problem 7
function count(input) {
    return input.length;
}

console.log(count("zion"));

// problem 8
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

// problem 9
function subtract(a, b) {
    return a - b;
}

console.log(subtract(5, 3));

// problem 10
function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 3));

// problem 11
function divide(numerator, denominator) {
    return numerator / denominator;
}

console.log(divide(10, 2));

// problem 12
function remainder(number, divisor) {
    return number % divisor;
}

console.log(remainder(20, 3));

// problem 13
function square(a) {
    return a * a;
}

console.log(square(25));

// problem 14
function square(int) {
    return int * int;
}

function add(x, y) {
    return x + y;
}

function sumOfSquare(a, b) {

    return add(square(a), square(b));
}

console.log(sumOfSquare(5, 4));

// problem 15

function doMath(sumOfSquare,a,b){
    return sumOfSquare(a,b);
}
console.log(doMath(sumOfSquare,4,5));






//Even More Bonuses

// problem 1


function whiteSpaces(character) {
    return character.length-character.trim().length;

}
console.log(whiteSpaces(" ZION  "));

// problem 3
function lastString(string){
    return string.slice(-1)=="a";
}
console.log(lastString("sabita"));

// problem 4
function whiteSpaceBegining(string){
    return string.length+string.trim().length-string.slice(-1).length;
    // length+string.length- string.trim().length - 1;
}
console.log(whiteSpaceBegining("     yosemite "));


// problem 5

function returnTrueMessage(){
    return"Hey,It's a false";
}
function returnFalseMessage(){
    return "Hey,It's a true";
}
function returnMessage(returnTrueMessage) {

}
console.log(returnMessage());


// problem 6
function willLoginUser(username,password,age,isAdmin){
    return (age>18|| isAdmin==true) && username!==password;

}
console.log(willLoginUser("sabita","regmi","15",false));