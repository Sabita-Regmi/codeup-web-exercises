(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area=Math.PI * Math.pow(this.radius,2);

            // TODO: return the proper value
            return area;
        },
        //

        logInfo: function (doRounding) {
            // TODO: complete this method.


            // If doRounding is true, round the result to the nearest integer.
            if(doRounding===true){

                var roundedArea = Math.round(this.getArea());
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + roundedArea);
        }else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }

        }
    };
    //
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius=5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number" );
    circle.logInfo(true);
})();


// For a bonus, create a MyMath object, add some of the properties and methods from the Math object to it, and also add some of your own,
//     like MyMath.FAVORITE as your favorite number. Also create a MyMath.roundPi(digits) which returns PI rounded to a given number of
// digits.Add a MyMath.randomCircle() method which picks a random radius and writes output similar to “A circle of radius 47 has an area
// of 6939.77”


var MyMath={
    favorite:8,
    square:function(num){
        return sqrt(num);
    },
    power:function(toBeRaised,input){
        return Math.pow(toBeRaised,input);
    },
    // roundPi=function(){
    //     return round(Math.PI);
    // },
};