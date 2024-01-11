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

//```

function loginUserMessage(username){
    if(username==undefined){
        console.log("Please Enter The username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kaushik"));
// console.log(loginUserMessage());

//Creating Shopping Cart

function addCartPrice(...num1){  //... ->rest operator
  return num1
}

//console.log(addCartPrice(200,344,231));  //to add more numbers we use rest operator


const user={
    username : "Kaushik",
    price : 123,
}
function handleObject(anyObject){  
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)  //passing object in a function

//we can also pass array in a function

