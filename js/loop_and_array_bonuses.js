"use strict"
// =======================Loops and Array Bonuses=========================
//     1.  create an array of shapes
// – prompt the user to search for a specific shape
// – using a for loop, iterate through the array to log the shapes until the matching shape is found
// – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.
// 2.  Create a function that returns a random day of the week
// 3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// – someFunction("a") // returns 1
// – someFunction("z") // returns 26
// 4.  Create a function that returns the longest string in a given array of string elements.
// 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the
// first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add
// together numeric elements but either array may contain non-numeric elements.
// – var arr1 = ['bob', 1, true, 1, 2];
// – var arr2 = [2, null, undefined, 0, 2, "apple"]
// – exampleFunction(arr1, arr2) // returns true
// problem 1 solved

var shapes=["round","square","rectangle","pentagon","hexagon"];


var chooseShape=prompt("choose your shape");
for(var i=0;i<shapes.length;i++){

    if(shapes[i]===chooseShape){

        alert("shape is found");
        break;
    }
}

// problem2 solved
var daysOfWeek=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
function randomDays(array){
   return array [(Math.floor(Math.random() * 6))];
}

console.log(randomDays(daysOfWeek));

// // // probelm3 solved
var alphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function positionInArray( array,input) {
   input= input.toLowerCase();
    return (array.indexOf(input))+ 1;


}
console.log(positionInArray(alphabets,"Z"));
console.log(positionInArray(alphabets,"s"));



// // problem 4

var arr = ['third longish item', 'first item','second item is longer than the third one'
    ];
function longestString(array) {
//
    var longest="";
    array.forEach(function(element, index, array) {
        if (element.length > longest.length) {
            longest = element;
        }
        });
    return longest;
}
console.log(longestString(arr));