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
        var sum = num1 + num2 + num3 + num4 + num5;
        var average = sum / 5;
        //Print to console the average of each number to one decimal place.
        console.log(average.toFixed(1));
        //If average is greater than 70, let the user know their status
        if (average > 70.0) {
            alert("You're a winner.");
        }
        //return the average to one decimal place
        return average.toFixed(1);
    }
}

//Humber Web Development object, courses as properties with `
var webCourse1 = 96;
var webCourse2 = 90;
var webCourse3 = 90;
var webCourse4 = 82;
var webCourse5 = 80;






//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS