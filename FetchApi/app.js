const URL="https://cat-fact.herokuapp.com/facts"
const factPara=document.querySelector("#para")
const btn=document.querySelector("#btn")
const btn1=document.querySelector("#btn1")

//The Fetch API provides an iterface for fetching resources
//it uses request and response objects
//the fetch() method used to fetch a resouces
//Fetch returns a promise

const getFacts = async() =>{
    console.log("getting data.....");
    let response= await fetch(URL)
    console.log(response); //JSON Format (JavaScript Object Notation)
    let data=await response.json();
    factPara.innerText = data[0].text;
}
const getFacts1 = async() =>{
    console.log("getting data.....");
    let response= await fetch(URL)
    console.log(response); //JSON Format (JavaScript Object Notation)
    let data=await response.json();
    factPara.innerText = data[1].text;
}


btn.addEventListener("click",getFacts)
btn1.addEventListener("click",getFacts1)