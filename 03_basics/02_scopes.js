
var c=20 //Global scope
let a=100
// {}  <-- scope 

if(true){  //Block Scope
    let a=10
    const b=29
    var c =20
}

//This wont work as a b are not in the scope of console function

console.log(a);
// console.log(b);
console.log(c);  //This will work,and this is why we dont use var
