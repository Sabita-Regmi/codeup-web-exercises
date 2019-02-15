// Mini Exercise 1
//
// Create a few beverage objects and assign values to each object for the following properties:
//
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - dateTimesOfLastSips
//     - isOpen
//
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects
// and assign property values in separate statements.
//


// var beverages = [
// ]
var soda = {
    brandName: 'crown-shoes',
    type: 'beer',
    volumeInLiters: 1,
    princeInCents: 800,
    dateTimesOfLastSips: ["Feb13", "Feb14"],
    isOpen: true
};
var appleJuice = {
    brandName: 'Naked',
    type: 'fruit juice',
    volumeInLiters: 1.5,
    princeInCents: 400,
    dateTimesOfLastSips: ["Feb14", "Feb15"],
    isOpen: true
};
var coffee = {}
coffee.brandName = 'starbucks';
coffee.type = 'caffeinated';
coffee.volumeInLiters = .5 ;
coffee.princeInCents = 300;
coffee.dateTimesOfLastSips = ["jan13", "jan14"];
coffee.isOpen = true;


// Mini Exercise 2

var users = [
    {
        name: "Sam",
        age: 21
    },
    {
        name: "Cathy",
        age: 34
    },
    {
        name: "Karen",
        age: 43
    }
];

// 1. Log the names of all users in a single console log seperated by spaces.
// 2. Change the names of all users to "John Doe"
// 3. Increase the current age of all users by 1
//
// Can you accomplish each step using iteration?

// for each
var message="";
users.forEach(function(user,index,array){
    message+= user.name ;
    console.log(message);

    user.name="john Doe";
    console.log(user.name);
    user.age=user.age+1;
    console.log(user.age);
});

// for loop
// for(i=0;i<users.length;i++){
//     console.log(users[i].name);
// users[i].name="john Doe";
// console.log(users[i].name);
// users[i].age=users[i].age+1;
// console.log(users[i].age);
// }
//

// example from instructor

// users[1].age = 0;
// users[2].age = 0;
//
// for (var i = 0; i < users.length; i += 1) {
//     users[i].age = 0;
// }
// forEach version of console logging
// users.forEach(function(element, index, array) {
//     console.log(element.age);
// });
// users.forEach(function(element) {
//     console.log(element.age);
// });
//
// users.forEach(function(user, i) {
//     console.log(user.age + ' at index' + i);
// });
// forEach version of changing a value
// users.forEach(function(element, index, array) {
//     element.name = element.name.toUpperCase();
// });
//
// console.log(users);





// Mini Exercise 3
// PAIR UP!
//     Create a dog object...
//     The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array



var dog= {
    breed: "belgian shepherd",
    weightInPounds: 80,
    age: 3,
    color: "black",
    sterilized: true,
    shotRecords: [
        {
            date: "july5",
            typeOfShot: "rabies"

        },
        {
            date: "july10",
            typeOfShot: "tetanus"

        }
    ],
    bark: function () {
        console.log("Woof!");
    },
    getOlder: function () {
        console.log(this.age + 1);
    },
    fix: function () {
        if (this.sterilized === true) {
            this.sterilized = false;

        }
    },
    vaccinate: function (date,typeOfShot) {

         dog.shotRecords.push({date:date, typeOfShot:typeOfShot});
    },

};


console.log(dog);


console.log(dog.vaccinate("jan22", "bordatella"));


