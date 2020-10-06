//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  AN AVERAGE FUNCTION
//alert("Connected");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

//################## CREATE YOUR AVERAGE FUNCTION
function calcAverage(num1, num2, num3, num4, num5) {
    var sum = num1 + num2 + num3 + num4 + num5;
    var average = sum / 5;
    console.log(average.toFixed(1));
    return average;
}

var webDev = {
    projectManagement: 96,
    webProgramming: 90,
    webAppDevelopment: 90,
    digitalDesign: 82,
    databaseDesign: 80
};


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS