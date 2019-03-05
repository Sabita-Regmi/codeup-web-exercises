// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//     Example input: ["fred", true, 5, 3]
// Example output: [3, 5]

function filterNumbers(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(typeof(arr[i])==="number"){
            result.push(arr[i]);
        }
    }
    result.sort();
    return result;
}

console.log(filterNumbers([1,2,"true",[1,3],8,16]));
// ------------- PRACTICE 2
// Write a function, getOlder() that takes in array of dog objects and increases the value of the age properties by 1.
// Example input: [

var dogs=[
{
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];
function addAge() {
    dogs.forEach(function (dog) {
        dog.age = dog.age + 1;
    })
    return dogs;

}
console.log(addAge(dogs));
// Example output: [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 5
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 11
//     }
// ];
// ------------- PRACTICE 3
// Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false
// Example input: [
var cars=[
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];
function washCars(arr){
    cars.forEach(function(car){
        car.isDirty="false";
    })
    return cars;
}
console.log(washCars(cars));
// Example output:
//     [
//         {
//             make: 'Volvo',
//             color: 'red',
//             year: 1996,
//             isDirty: false // changed to false
//         },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]
// ------------- PRACTICE 4
// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on
// the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an
// array of user objects that are admins.
//     Example Input: [

var admins=[
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];
function adminList(arr){
    var count=0;
    admins.forEach(function(admin){
        if(admin.isAdmin){

            count=count+1;

        }
    })
    return count;
}
console.log(adminList(admins));



// Example Output (before refactor): 2
// Example Output (after 1st refactor): [
//     'user1@email.com',
//     'user2@email.com'
// ]
// Example Output (after 2nd refactor): [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]
// ------------- PRACTICE 5
// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns
// an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same
// order of the two passed in arrays. Assume the two array inputs are the same length.
//     Example Input:
    var breads  = [
        "white",
        "wheat",
        "rye",
        "white"
    ];
var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

    function makeSandwhichObjects(breads, fillings) {
     var sandwiches = {};
     breads.forEach(function (breadType, index) {
        sandwiches.bread = breadType;
       sandwiches.filling = fillings[index];
     });
    return sandwiches;
 }

console.log(makeSandwhichObjects(breads,fillings));
// makeSandwhichObjects(breads, fillings)

// example call to the function
// Example Output: [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rye",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]

console.log("it works");

//##################justin's solution#######################
// // ------------- PRACTICE 2
// //
// // Write a function, getOlder() that takes in array of dog objects and increases the value of the age properties by 1.
// //
// var dogs = [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];
//
// function getOlder(dogs) {
//     dogs.forEach(function(dog) {
//         dog.age += 1;
//     });
// }
//
// getOlder(dogs);
//
// // to test the change
// dogs.forEach(function(dog) {
//     console.log(dog.age);
// });
//
//
//
// // ------------- PRACTICE 3
// //
// // Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false
// //
// var cars = [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: true
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: true
//     }
// ];
//
// function washCars(cars) {
//     cars.forEach(function(car) {
//         car.isDirty = false;
//     });
// }
//
// washCars(cars);
//
// // to test the change
// cars.forEach(function(car) {
//     console.log(car.isDirty);
// });
//
// // Example output:
// //     [
// //         {
// //             make: 'Volvo',
// //             color: 'red',
// //             year: 1996,
// //             isDirty: false // changed to false
// //         },
// //         {
// //             make: 'Toyota',
// //             color: 'black',
// //             year: 2004,
// //             isDirty: false // stays the same
// //         },
// //         {
// //             make: 'Ford',
// //             color: 'white',
// //             year: 2007,
// //             isDirty: false // changed to false
// //         }
// //     ]
// //
// // ------------- PRACTICE 4
// //
// // Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
// //
// //     Example Input: [
// //     {
// //         isAdmin: true,
// //         email: 'user1@email.com'
// //     },
// //     {
// //         isAdmin: true,
// //         email: 'user2@email.com'
// //     }
// //     {
// //         isAdmin: false,
// //         email: 'user3@email.com'
// //     }
// // ];
//
//
// // version 1
//
// function adminList(users) {
//     var output = 0;
//     users.forEach(function(user) {
//         if (user.isAdmin) {
//             output += 1;
//         }
//     });
//     return output;
// }
//
// // version 2
//
// function adminList(users) {
//     var output = [];
//     users.forEach(function(user) {
//         if (user.isAdmin) {
//             output.push();
//         }
//     });
//     return output;
// }
//
// // version 3
//
//
// function adminList(users) {
//     var output = [];
//     users.forEach(function(user) {
//         if (user.isAdmin) {
//             output.push(user);
//         }
//     });
//     return output;
// }
//
//
// // Example Output (before refactor): 2
// //
// // Example Output (after 1st refactor): [
// //     'user1@email.com',
// //     'user2@email.com'
// // ]
// //
// // Example Output (after 2nd refactor): [
// //     {
// //         isAdmin: true,
// //         email: 'user1@email.com'
// //     },
// //     {
// //         isAdmin: true,
// //         email: 'user2@email.com'
// //     }
// // ]
// //
// // ------------- PRACTICE 5
// //
// // Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
// //
// //     Example Input:
// //
// var breads  = [
//     "white",
//     "wheat",
//     "rye",
//     "white"
// ];
//
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
//
// // makeSandwichObjects(breads, fillings) // example call to the function
//
// var testOutput = [
//     {
//         bread: "white",
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rye",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ];
//
// function makeSandwichObjects(breads, fillings) {
//     var sandwiches = [];
//     breads.forEach(function(bread, index) {
//         sandwiches.push({
//             bread: bread,
//             filling: fillings[index]
//         });
//     });
//     return sandwiches;
// }
//
//
// console.log(makeSandwichObjects(breads, fillings));
