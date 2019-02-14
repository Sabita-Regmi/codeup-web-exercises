

"use strict"





// // break and continue

// while (true) {
//     var skipNum = parseFloat(prompt("Enter an odd number between 1 - 50: "));
//     if (!isNaN(skipNum) && skipNum % 2 !==0) {
//         break;
//     }
// }
//
//     // var skipNum = prompt("Enter number from 1 to 50");
// console.log("Number to skip is: " + skipNum);
// for(i = 1; i <= 50; i++) {
//     if(i % 2 !== 0) {
//         if(i === skipNum) {
//             console.log("Yikes! Skipping number: " + skipNum);
//             continue;
//         }
//         console.log("Here is an odd number: " + i);
//         i++;
//     }
// }
do {
    var num = prompt("enter an odd number 1-50");
}while(num %2==0 || num>50);
console.log("the number to skip is" + num);

for (var i= 1;i<=50; i+=2){
    if(num==i){
        console.log("yike!skipping number: " + i);
        continue;




    }console.log("Here is an odd number :" + i);
}
