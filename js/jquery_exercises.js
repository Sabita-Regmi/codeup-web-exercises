"use strict";

$(document).ready(function() {


//######first exercise##############

    // alert( 'The DOM has finished loading' );


//###########id-selector#####################

    // Use jQuery to select an element by the id. Alert the contents of the element.
    // var content=$("#heading").html();
    // alert (content);
    // Update the jQuery code to select and alert a different id.
    // var content1=$("#1st-div").html();
    // alert(content1);
    // Use the same id on 2 elements. How does this change the jQuery selection?
    $("#xyz").click(function(){
        var xyz = $(this).val();
        alert(xyz);
    }); //it works only for the first button, clicking on the other buttons are being ignored.

    //css selector
    //####### Class Selectors#################
    //
    // Remove your custom jQuery code from previous exercises.
    //
    //

    //     Remove the class from one of the elements. Refresh and test that the border has been removed.
    //
    //     Give another element an id of codeup. Does this element get a border now?

//     Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
$(".codeup").css('border','1px solid red' )

    //########## Element Selectors######################
    //
    // Remove your custom jQuery code from previous exercises.
    //
// Using jQuery, set the font-size of all li elements to 20px.
    $("li").css('font-size','20px');
// /Craft selectors that highlight all the h1, p, and li elements.
//     $("h1").css("background-color","pink");
//     $("p").css("background-color","green");
//     $("li").css("background-color","orange");





//########Multiple Selectors################

    // Combine your selectors that highlight all the h1, p, and li elements.
    // $("h1,p,li").css("background-color","pink");

//Create a jQuery statement to alert the contents of your h1 element(s).
// var content2=$("h1").html();
// alert(content2);


//########### jquery event##################
// Add jQuery code that will change the background color of a h1 element when clicked.
    $('h1').click(function () {
        $(this).css('background-color', 'red');
    });
// //Make all paragraphs have a font size of 18px when they are double clicked.
    $('p').dblclick(function () {
        $(this).css('font-size', '18px');
    });
// //    Set all li text color to red when the mouse is hovering, reset to black when it is not.
    $('li').hover(function(){
       $(this).css('color','red');
    },
        function(){
        $(this).css('color','black');
    });
//
//
 });



