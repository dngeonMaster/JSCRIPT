//++++++++++++++++++++++++++ARROW FUNCTION+++++++++++++++++++++++++++++
//node 03_basics/03_arrow.js
const user={
    username:"Kaushik",
    price:129,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);  //This->refers to the current context
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username="Sama"  //Here we changed the context
// user.welcomeMessage()

// console.log(this);   //Empty Object

// function kaushik(){
//     let username="kaushik"
//     console.log(this.username);  //We cannot use this-> inside a function
// }

// kaushik()

const kaushik= ()=>{
    let username="kaushik"
    console.log(this.username);  //Here also we cannot use this
}
//kaushik()

//Arrow Function

// const addTwo=()=>{}  //This is an arrow function
const addTwo=(num1,num2)=>{
    return num1 + num2

} 
console.log(addTwo(1,3))