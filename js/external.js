"use strict"
// console.log("hello from codeup");
// alert("welcome to my website");
// var color=prompt("what is your favorite color?");
// alert=( "Great " + color + " is my favorite color too");

// problem no 1

// var m1=+prompt("how long did you rented movie little mermaid?")
// var m2=+prompt("how long did you rented movie brother bear?")
// var m3=+prompt("how long did you rented movie herculus?")
// var rate=+prompt("what is the rate per movie?")
// var total=((m1+m2+m3)*rate);
// alert(+total);





// problem2


// var google=+prompt("what is your per hour wage in google?");
// var amazon=+prompt("what is your per hour wage in amazon?");
// var facebook=+prompt("what is your per hour wage in facebook?");
// var googleHr=+prompt("how many hours do you work for google?");
// var amazonHr=+prompt("how many hours do you work for amazon?");
// var facebookHr=+prompt("how many hours do you work for facebook?");
// var salary=((google*googleHr)+(amazon*amazonHr)+(facebook*facebookHr));
// alert(salary);










var classFullfillment=confirm("Is the already fulfilled?");
var scheduleConflict=confirm("Is there any conflict in schedule?");
var enrollment=(classFullfillment===false && scheduleConflict===false);
alert(enrollment);
// problem4

var numItem=1;
var notExpired=true;
var membership=true;
var offer=((Number(numItem >2)||(membership===true))&& notExpired===true);
// var offer= membership || (numItem >2 && notExpired);
console.log(offer);
