"use strict"
console.log("hello from codeup");
alert("welcome to my website");
var color=prompt("what is your favorite color?");
alert=( "Great " + color + " is my favorite color too");

// problem no 1
var m1=+prompt("how long did you rented movie little mermaid?")
var m2=+prompt("how long did you rented movie brother bear?")
var m3=+prompt("how long did you rented movie herculus?")
var rate=+prompt("what is the rate per movie?")
var total=((m1+m2+m3)*rate);
alert(+total);
// console.log(total);




// problem2

var google=400,amazon=380,facebook=350;
var googleHr=10,amazonHr=6,facebookHr=4;
var salary=((google*googleHr)+(amazon*amazonHr)+(facebook*facebookHr));
console.log(salary);


// problem3
var classFullfillment=false;
var scheduleConflict=false;
var enrollment=(classFullfillment===false && scheduleConflict===false);
console.log(enrollment);

// problem4
var numItem=1;
var notExpired=true;
var membership=true;
var offer=((Number(numItem >2)||(membership===true))&& notExpired===true);
// var offer= membership || (numItem >2 && notExpired);
console.log(offer);
