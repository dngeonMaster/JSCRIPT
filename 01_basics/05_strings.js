//node 01_basics/05_strings.js

const name="kaushik"
const repoCount=100;

//console.log(name +" has "+ repoCount +" Repositories" );  //this method is outdated


console.log(`My name is ${name} and repo count is ${repoCount}`);  //string interpolation

//declearing a string

const gameName=new String('Kaushik-b')

console.log("Character at 0th index ->"+gameName[0])

//Objects

console.log(gameName.length)  //gives the length of string

console.log(gameName.toLocaleUpperCase())  //Converts the string into upperCase

console.log(gameName.charAt(2))  //gives the character at a particular index

console.log(gameName.indexOf('i'))  //gives the index of a character

const newString= gameName.substring(0,5)  //substring
                                           //int the argument the last index is not inluded


console.log(newString)

//Trimming of String

const newString_1 ="    Kaushik    Borah   "
console.log(newString_1)
console.log(newString_1.trim())  //Trim functions removes the starting and ending spaces


//Replace

const url="https://kaushik.com/kaushik%20borah"
//Here when the user gives the url ,sometimes he puts a space in the url,so 
//the browser converts it to someting like %20  But we dont want it so we use replace fucntion


console.log(url.replace('%20','-'))  //replacing %20 with -

//Querying whether something is present in the string

console.log(url.includes('kaushik'))

