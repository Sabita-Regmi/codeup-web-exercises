// function addition(array){
//     var sum=0;
//   for(i=0;i<array.length;i++){
//      return sum+=array[i];
//   }
// }
//
// console.log(addition([1,2,3]));
function sum(array) {
    return array.reduce(function(a,b) {
        return a + b
    });
}
console.log(sum([1,2,3,4]));
