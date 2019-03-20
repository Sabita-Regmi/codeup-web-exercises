



// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed
// number of milliseconds.
//

const wait=(num)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },num)
    });
}



wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//
// //mini exercise
// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let number=Math.random();
//         console.log(`our number is ${number}`);
//         if(number>0.5){
//             resolve();
//         }else{
//             reject();
//         }
//     },4000);
// })
//     .then(()=>console.log("resolved"))
//     .catch(()=>console.log("rejected"));


// fetch('https://api.github.com/users/sabita-regmi')
//     .then(response=>console.log(response.status))
//         .catch(error=>console.error(error));
//
var keys=gitHubKeys;
let getLastPush=(userName)=> {
    return fetch('https://api.github.com/users/sabita-regmi/events', {headers: {'Authorization': keys}})


        .then(response => {
            // console.log(response)
            return response.json();
        })
        .then(jsonResponse => {
             console.log(jsonResponse)
            return console.log(jsonResponse[0].created_at);
        })


}

getLastPush("sabita-regmi").then(()=>console.log("resolved"));