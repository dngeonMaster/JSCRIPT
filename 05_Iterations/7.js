//MAP Operation
//node 05_Iterations/7.js
const myNumbers=[1,2,3,4,5,6,7,8,,9,10]
// const newNums=myNumbers.map((num) => num+10)




//Chaiining

const newNums=myNumbers
                      .map((num)=>num+10) 
                      .map((num) => num*2)
                      .map((num) => num+1)

console.log(newNums);

//REDUCE JS
