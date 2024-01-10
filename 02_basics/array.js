//node 02_basics/array.js

//ARRAY
/*
The Array object, as with arrays in other programming
languages, enables storing a collection
of multiple items under a single variable name, 
*/
const myArr=[0,1,2,3,4,5] //In JavaScript,Array are resizable

const myHeros=["alpha","Beta","Gamma"]
//console.log(myArr[2]);  //Accessing an element in array(0-based idexing)

//ARRAY METHODS

// myArr.push(6)  //inserts element at the end
// myArr.push(7)

// myArr.pop();  ///Removes the last element

//myArr.shift()  //removes the frist element

//console.log(myArr.includes(9))  //whether something is present or not
//console.log(myArr.indexOf(2))  //Gives the index of an element

const newArr= myArr.join()



// console.log(myArr);
// console.log(newArr);  //Gives the output in string
// console.log(typeof newArr);  //Gives the output in string


//SLICE , SPLICE

console.log("A",myArr);

const myn1= myArr.slice(1,3)  //Takes the element from index 1 to 2(doesnt include 3)

console.log(myn1);

console.log("B",myArr);

const myn2= myArr.splice(1,3)   //This operation manipulates the original array

console.log("C",myArr);

console.log(myn2);


