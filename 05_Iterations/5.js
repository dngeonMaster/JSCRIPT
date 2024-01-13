//node 05_Iterations/5.js

const coding=["js","python","Ruby","Cpp"]

//forEach loop

coding.forEach( function (item){  //Call Back funtion
    //console.log(item);
} )

coding.forEach((val) => {  //call bacl arrow function
    //console.log(val);
})

function printme(item){
    console.log(item);
}

coding.forEach(printme)  //Give the reference