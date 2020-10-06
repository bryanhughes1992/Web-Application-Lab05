//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  AN AVERAGE FUNCTION
//alert("Connected");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

//################## CREATE YOUR AVERAGE FUNCTION

//Function takes five numbers and calculates the average.
function calcAverage(num1, num2, num3, num4, num5) {
    //Validate arguments as numbers
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) ||isNaN(num5)) {
        throw("ONLY NUMBERS ACCEPTED");
    } else {
        //Create a variable the sum of all arguments
        let sum = num1 + num2 + num3 + num4 + num5;
        let average = sum / 5;
        //return the average to one decimal place
        return average.toFixed(1);
    }
}
//Print to console the average of each number to one decimal place.
console.log(average.toFixed(1));
//Humber Web Development object, courses as properties with `
var webCourse1 = 9;
var webCourse2 = 9;
var webCourse3 = 9;
var webCourse4 = 82;
var webCourse5 = 80;

//If average is greater than 70, let the user know their status
if (calcAverage(webCourse1,webCourse2, webCourse3, webCourse4, webCourse5) > 70.0) {
    alert("You're a winner.");
} else {
    alert("Review Required");
}