const usermail="kaushik@email.com"

if(usermail){
    console.log("Emaildone");

}
else{
    console.log("don't have email");
}

//node 04_controlFlow/03_truthy.js

const usermail2=""
if(usermail2){
    console.log("Emaildone");

}
else{
    console.log("don't have email");
}


//Falsy Value-> false,0,-0,Bigint,On,",null,NaN"

//Truthy Values -> "0","False", " ",[], {}, function(){}


///Nullish Coalesciing Operator (??) :: null/undefine maii use hota hai

let val1;
// val1 =5 ?? 10;
// val1 =null ?? 10;
// val1 =undefined ?? 10;


// console.log(val1);
// console.log(val1);
// console.log(val1);

//Terniary Operator

//condition ? true : false

const price = 100

price>10 ? console.log("Greater than 10") : console.log("less than 10");