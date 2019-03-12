
//Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.


let languages3=users.filter(n=>n.languages.length>=3);
console.log(languages3);


//Use .map to create an array of strings where each element is a user's email address.

let emailId=users.map(user=>user.email);
console.log(emailId);


//Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the
// result to calculate the average.
let totalYear=users.reduce((total,person)=>{
    return (total+person.yearsOfExperience);
},0);
console.log(totalYear/users.length);



//Use reduce to get the longest email from the list of users.
let longestEmail=users.reduce((emailIds,user)=>{
    if (user.email.length > emailIds.length) {
        return user.email;
    }else {
        return emailIds;
    }
}, "");
console.log(longestEmail);

// Use reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

const result=users.reduce((previous,current)=>`${previous} ,${current.name}`,"Your instructor's name are: ")

console.log( result);

//######BONUS EXERCISE############
// Use reduce to get the unique list of languages from the list of users.
let flatArray=users.reduce((prev,next)=> {

    let results= (prev.concat(next.languages));

    let finalResult= results.filter(n=>n.languages!==n);
    return finalResult;

},[]);
console.log(flatArray);








//
// //mini exercise map
// //create an array of number [1,2,3,4,5] and return [1,3,5,7,9] using map.
// const numbers=[1,2,3,4,5];
// let incremented=numbers.map(number=>number+number-1);
// // let incremented=numbers.map(n=>n+ numbers.indexof(number));
// console.log(incremented);
//
//
// //filter mini exercise
// const randomNumbers=[1,1,1,0,0,0,0,1,1];
// let array1=randomNumbers.filter(n=>n==true);
// console.log(array1);
// let array2=randomNumbers.filter(n=>n==false);
// console.log(array2);