//Immediately invoked function Expression(IIFE)

//Executing the function right after declaring it
//node 03_basics/04_IIFE.js

//IIFE ()()
(function chai(){  //Named IIFE
    console.log("DB Connected");
})();
( ()=>{          //Unnamed IIFE
    console.log("DB2 connected because of ; ");
})();