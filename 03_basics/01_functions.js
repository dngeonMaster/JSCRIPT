//node 03_basics/01_functions

//Wrapping up of a peice of code in a fackage -> Function

//Function Definition
function sayMyName(){
    console.log("I");
    console.log("am");
    console.log("Heisenberg!!");
}

//Function call
//sayMyName //This is the reference of the function

//sayMyName()  //This is function execution

//add two numers

function addTwoNum(number1,number2){  //Here we call these values as parameters
    console.log(number1+number2)
}
//addTwoNum(3,6)  //while calling a fucntion ,we call these values as argument


function addTwoNum(number1,number2){  //Here we call these values as parameters
    let r=number1+number2
    return r
}
const result=addTwoNum(3,4)
const r=addTwoNum(3,4)

// console.log("Result ",result);
// console.log("Result ",r);