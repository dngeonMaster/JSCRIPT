//node Promises/promises.js


//Creating Promises
//const promise1=new Promise()  //Promise Created


//Promises by a callback function
const promise1=new Promise(function (resolve,reject){
    //do an async task
    //like DataBase calls , cryptography , network
    setTimeout(function(){
        console.log("Async Task is Complete");
        resolve()  //at this point promise will get connect by .then
    },3000)
}) 

//Consuming Promise
promise1.then(function(){
    console.log("Promise consumed");  //after resolve()
})

new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("HIIII");
        resolve()
    },2000)
}).then(function(){
    console.log("I am fine");
})

//Passing DBB
const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({
        username : "Kaushik17",
        email : "kaushik@google.com",
        age : 23,
       })
    },2000)
})
//Taking the data from promise
promise3.then(function(user){
   console.log(user);
})