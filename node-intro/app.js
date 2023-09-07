var name = "Catherine Benton";

var myNumber = 22;

const port = 3000;
// Objects
var car = {
    make:"Audi",
    model:"S5",
    year:2023
}
//functions or methods that returns a value
function addTwo(somenumber) {
    return somenumber + 2;
}

//functions that perform a task
function outputsomething(output) {
    console.log("You wrote " + output);
}

//outputsomething("Write something here... I'm having fun!! with node");

var result = addTwo(10);

//outputsomething(result);

//outputsomething(addTwo(10)); //does the previous 2 lines in one step

//console.log("Hello class!!");


//console.log(car);

//access object properties with "."

//outputsomething(car.model);

//console.log( "My name is " + name + " and my favorite number is " + myNumber);
console.log(name + " " + myNumber);
console.log(myNumber + myNumber);
console.log(myNumber + "22");