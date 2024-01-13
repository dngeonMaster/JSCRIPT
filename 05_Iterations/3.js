//For or ->Array Specific loops
//node 05_Iterations/3.js
// ["","",""]
// [{},{},{}]  Objects inside array

const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings="Hello World!"
for (const greet of greetings) {
    //console.log(`Each character is ${greet}`);
}

//MAPS

const map=new Map()  //A key in the map may only occur once
map.set('In',"India")
map.set('USA',"United States of America")
map.set('UK',"United Kingdom")
map.set('In',"India")  //Here india wont go in the map as it takes only unique value

//console.log(map);

//Looping in Map
for (const [ key , value] of map) {  //Destructuring 
    console.log(key ,"->",value);
    
    
}

//Looping in Object

// const myObject ={
//     'game1' : 'NFS',
//     'game2' : 'GTA',
// }

// for (const key of myObject) {  ///Oject is not iteratabble by this method
//     console.log(key);
    
// }

