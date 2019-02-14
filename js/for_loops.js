// problem 2 for loop solved


function showMultiplicationTable(input){
    for (var i=1;i<=10;i++){
var number2=i *parseFloat(input);
console.log(input +"*"+ i + " = " + number2 );
    }
}

(showMultiplicationTable(7));


//problem solved
var i=100;
for (i=100;i>=5;i-=5){
    console.log(i);
}


//problem3 for loop solved

for(x=20;x<=20;x++){
    var x=Math.floor(Math.random() * (180)) + 20;
    if (x%2==0){
        console.log(x + " is even");
    }else{
        console.log(x + " is odd");
    }
}


// for loop problem 4

for (var i=1;i<10;i++){
    var text ="";
    for (var j=1;j<=i;j++){
        text+=i;
    }console.log(text);
}
