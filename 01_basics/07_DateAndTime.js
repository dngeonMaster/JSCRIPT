//Dates
//node 01_basics/07_DateAndTime.js

let myDate=new Date();   //We get the current date
console.log(myDate);
// console.log(myDate.toString());  //Converting Date to String
// console.log(myDate.toDateString());  
// console.log(myDate.toISOString());  
// console.log(myDate.toJSON());  
// console.log(myDate.toLocaleDateString());  
// console.log(myDate.toLocaleString());  
// console.log(myDate.toLocaleTimeString());  


console.log(typeof(myDate));

let myCreatedDate= new Date(2024,0,10);

console.log(myCreatedDate.toDateString());

//Time 

let myTimeStamp=Date.now();

console.log(myTimeStamp);

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getFullYear());