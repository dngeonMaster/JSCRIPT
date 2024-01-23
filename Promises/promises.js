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


const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true

        if(!error){
            resolve({
                username : kaushik,
                pw :123,
            })
        }
        else{
            reject('Something went wrong')
        }
    },2000)
})


//taking username by chaining
promise4.then((user)=>{
     console.log(user);
     return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})



const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true

        if(!error){
            resolve({
                username : "JavaScript",
                pw :123,
            })
        }
        else{
            reject('JS went wrong')
        }
    },2000)
})

//Consuming Promises by Async Await

async function consumePromise5(){
  try {
    const Response= await promise5
    console.log(Response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise5()