//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  I OBJECT!
//alert("Connected");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!
var meObject = {
    name: "Bryan Hughes",
    dateOfBirth: "July 6th, 1992",
    heightCm: 201,
    weightLbs: 300,
    greeting: function() {
        alert(`My name is ${meObject.name}, and I am ${meObject.heightCm}cm tall.`);
    }
};

console.log(meObject.dateOfBirth);
//alert(`My name is ${meObject.name}, and I am ${meObject.heightCm}cm tall.`);
meObject.greeting();
