//node 03_basics/02_scopes.js
var c=20 //Global scope
let a=100
// {}  <-- scope 

if(true){  //Block Scope
    let a=10
    const b=29
    var c =20
}

//This wont work as a b are not in the scope of console function

// console.log(a);
// // console.log(b);
// console.log(c);  //This will work,and this is why we dont use var


//Nested Function

function one(){
    const username="kaushik"

    function two(){
        const website="Google"
        console.log(username);
    }
    //console.log(website);  //we cant access it here as it is out of scope
    two();
}
one();

if(true){
    const username="Kaushik"
    if(username==="Kaushik"){
        const website="Google"
        console.log(username+" "+website);
    }
    //console.log(website);  //Out of scope
}
//addTwo(5)  //Here it cannot be accessed before declaring it
const addTwo = function(num){  //This is an expression and can hold jSon values , funcitons etc

    return num+2;
}
console.log(addTwo(5));