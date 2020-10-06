//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  AN AVERAGE FUNCTION
//alert("Connected");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

var numbers = {
    num1: 302,
    num2: 12,
    num3: 404.66,
    num4: 3203,
    num5: 1203452
};

//################## CREATE YOUR AVERAGE FUNCTION
function calcAverage(num1, num2, num3, num4, num5) {
    var sum = num1 + num2 + num3 + num4 + num5;
    var average = sum / 5;
    console.log(average.toFixed(1));
}



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS