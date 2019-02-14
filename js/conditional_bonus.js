// Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.
//     If the input contains white space or numbers, return the string "INVALID INPUT".


function makeJustinMessage(input) {
    if(!isNaN(input) || input.length==0){
        return"INVALID INPUT";
    }else{
        if (input=== "justin") {
            return "It's justin";
        }else{
                return"it is not justin";
            }

    }
}
console.log(makeJustinMessage("justin"));
console.log(makeJustinMessage("sabita"));
console.log(makeJustinMessage(1));
console.log(makeJustinMessage("  "));


// Write a function that returns a string describing the action to be taken for a given street light color input. For example,
// if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not
// be case sensitive.
//######using if else #############

function traffic(input) {
    var input=input.toLowerCase();
    if (input =="red") {
        return "STOP";
    } else if (input== "green") {
        return "GO ahead";
    } else if (input =="orange") {
        return "SLOW DOWN!!!!";
    } else {

        return "Not valid";
    }
}
 console.log(traffic('red'));
console.log(traffic('GREEN'));
console.log(traffic("OranGe"));

/////###using switch case//////###########


function traffic(color) {
var color=color.toLowerCase();
    switch (color){
        case "red":
            return "STOP";
            break;
        case "green":
            return "GO AHEAD!!";
            break;
        case"orange":
            return "SLOW DOWN!!!!";
            break;
        default:
            return "INVALID";
            break;

    }
}
console.log(traffic("rEd"));
console.log(traffic('GREEN'));
console.log(traffic("oraNGE"))


// Create a function that simply returns an input as an output. If no input is passed to the function when it is called,
// return the string "no input provided."

function inputAsOutput(input){
    if(input.length === 0){
        return "no input provided";
    }else{
        return input;
    }

}
// console.log(inputAsOutput());
console.log(inputAsOutput("sabita"));


// Create a function that returns a unique message string for a given digit input. If the input is not a single digit,
// return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9"
// are valid inputs.


function digitSize(num){
    if ( !isNaN(num) && num.length== 1){
        return"valid string";
    }else if (isNaN(num)){
        return"invalid input";
    }else{
        return "too many string";
    }

}
console.log(digitSize("20"));
console.log(digitSize("sabita"));
console.log(digitSize("s"));
console.log(digitSize("1"));

// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')


//
function message(days) {
    var days=days.toLowerCase()
    if (days==="monday" || days==="mon"){
        return "first day of week";
    }
    else if (days==="tuesday"|| days==="tues"){
        return "taco tuesday";
    }else if (days==="wednesday" || days==="wednes"){
        return "hump day";
    }else if(days==="thursday" || days==="thurs"){
    return "weekends are near";
    }
    else if(days==="friday" || days==="fri"){
        return"thanks god it is friday";
    }else if(days==="saturday" || days==="satur"){
        return "happy weekend";
    }else if(days==="sunday"|| days==="sun"){
        return "sunday is funday";

    }else{
        return"invalid day";
    }
}
var favDays=prompt("what is your favorite day");
alert(message(favDays));



// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator


// function text(input){
//
//     if(input>=0 || input<=0){
//         return"it is number";
//     }else{
//         return "it is not a number";
//     }
// }
// var num=prompt("Enter a number");
// alert(text(num));

//####Refractoring using trenary operator######
// function text(input) {
//     var message;
//     (input >= 0 || input <= 0) ? message = "it is number" : message = "it is not a number";
//     return message;
// }
// var num=prompt("Enter your favorite number");
//
// alert(text(num));


// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts
// the months available in that season and then asks the user to pick a given month. After selecting the month, alert a
// unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months

function favSeason(season){
    season=season.toUpperCase();
    if("season===Spring"){
        alert("pick your month");

    }
}




// __
// GOLD STAR BONUS
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units
//








