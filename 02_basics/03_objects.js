//node 02_basics/03_objects.js

//objects can be declared as constructor(singleton) and literals(not singleton)

//Object Literals

// const JsUser ={}  //Creating an aobject
//Object.create()  //Creating object by constructor method


//Symbol
const mySym=Symbol("key1")

const JsUser ={
    name : "Kaushik",
    "Full Name" : "Kaushik Borah",   //this cannot be accessed by dot operator
    age: 23,
    location:"Assam",
    [mySym] : "mykey1",
    email:"kaushik@google.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Saturday"],
} 

//Accessing objects

// console.log(JsUser.email); //Not an appropriate way

// console.log(JsUser["email"]);  //efficient way  

//console.log(JsUser.Full Name); //spaces not allowed

// console.log(JsUser["Full Name"]);

// console.log(JsUser[mySym]);   //Accesing the symbol

 //Over writting values

 JsUser.age=22

 //console.log(JsUser["age"]);

 //console.log(JsUser);

//++++++++++++FREEZE+++++++++++++++++
//Object.freeze(JsUser)   //after this ,any changes wont happen in the object

JsUser.name="JOON"

//console.log(JsUser);

//++++++++++++++++FUNCTION++++++++++++++++++++++   ` ` ` 

JsUser.greeting=function(){

    console.log(` Hello Js User` );
}

JsUser.greeting2=function(){

    console.log(` Hello Js User,${this.name}` );
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
