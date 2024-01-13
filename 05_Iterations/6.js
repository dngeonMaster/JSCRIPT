//node 05_Iterations/6.js

const coding=["js","python","Ruby","Cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
   
// })

//console.log(values);  //This will be undefined and wiill not return anything
 //for each loop will not return anything


 //Filter Operation
 const myNum=[1,2,3,4,5,6,7,8,9,10]

 const values=myNum.filter((num) => num > 4) //Filter also takes call back function


 console.log(values);  //Fliter operations returns the values

const newNums=myNum.filter( (num) => {
    return num>8
})
 
console.log(newNums);

