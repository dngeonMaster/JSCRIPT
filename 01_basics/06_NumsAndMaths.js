//node 01_basics/06_NumsAndMaths.js
 
 const score=400
//console.log(score);

const balance=new Number(100)  //Here it is specifically casted to number


// console.log(balance);

// console.log(balance.toString().length);  //Changes to typeof String
// console.log(balance.toFixed(3));  //Sets the precision value to 3 i.e 100.000


const Number_2=123.9233

//console.log(Number_2.toPrecision(3));  //output 124


const hundreds=10000000
// console.log(hundreds.toLocaleString());  //gives commas in between as US Standards

// console.log(hundreds.toLocaleString('en-IN'));  //Indian Standards



//*****************MATHS****************** */

//Maths Liibraries comes inbuilt with JavaScript


// console.log(Math);
// console.log(Math.abs(-123));  //Negative Values Becomes positive

// console.log(Math.round(4.23));  //Rounfing off
// console.log(Math.ceil(4.23));  //Rounfing off to higher value
// console.log(Math.floor(4.9));  //Rounfing off to lower value

// console.log(Math.min(4,3,2,1));  //Maximum and minimum value 
// console.log(Math.max(4,3,2,1));


console.log(Math.random());  //always give the value between 0 and 1
 
//To give random numbers between min and max value

const min=10;
const max=20;

console.log(Math.floor((Math.random()*(max-min+1)+min)))
console.log(Math.floor((Math.random()*(max-min+1)+min)))
console.log(Math.floor((Math.random()*(max-min+1)+min)))


