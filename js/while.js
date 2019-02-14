// /problem 1 while loop solved
var i=2;
while(i<70000){
    console.log(i);
   i= i*2;
}





// // problem 2
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// var coneSold=Math.floor(Math.random() * 5) + 1;
// var coneLeft=allCones-coneSold;
// do {
//     console.log("YAY,I sold them all");
//     console.log(coneLeft);
// }
//     while(coneSold-coneLeft===0);

// sophie's solution


//ice cream cones
//generates a random number btwn 50-100
var allCones = Math.floor(Math.random() * 50) + 50;

//ice cream cone loop simulator
//log out how many cones i have
console.log("I have " + allCones + " cones.");
do {
    //generates random number between 1 and 5
    var cones = Math.floor(Math.random() * 5) + 1;

    console.log(cones + " cone/s sold...")
    //subtract cones sold from total
    allCones -= cones
    //log new total
    console.log(allCones + " cone/s left.")

    if (allCones === 0) {
        console.log("Yayy! I sold all my cones!");
    }

    if ((cones > allCones) && (allCones !== 0)) {
        console.log("Can't sell you " + cones + " cones, I only have " + allCones);
        console.log("Did you want to buy my last " + allCones + " cone/s?")
        console.log(allCones + " more cones sold..");
        allCones -= allCones
        console.log("Yayy! I sold all my cones!");
    }

} while ((allCones - cones >= 0));






