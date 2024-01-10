//node 02_basics/04_objects.js

//const tinderUser= new Object()  //singleton Object

const tinderUser = {}

tinderUser.id="123Abc"
tinderUser.name="Chad"
tinderUser.isLoggedIn=false


//console.log(tinderUser);

//Nested Objects

const regularUser={

    email : "kaushik@google.com",
    fullname: {
        userFullName : {
            firstName: "Kaushik",
            lastName:"Borah",
        }
    }
}

//Accessing

// console.log(regularUser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"A",4:"B"}

// const obj3={obj1,obj2}  ///Same problem as array

// //const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}

//console.log(obj3);

//Extracting keys and values from objects
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));