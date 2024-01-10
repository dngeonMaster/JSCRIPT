//node 02_basics/02_array.js

const marvel_heroes=["Thor","IronMan","SpiderMan"]
const dc_heroes=["SuperMan","Flash","Batman"]

//marvel_heroes.push(dc_heroes);  //It adds the array inside a array


// console.log(marvel_heroes);  
// console.log(marvel_heroes[3][1]);  

const allHeros=marvel_heroes.concat(dc_heroes)
//console.log(allHeros);  //adds the elements of the array

const allNewHeros=[...marvel_heroes,...dc_heroes] //spreads all the elements and joins together in a single array


//console.log(allNewHeros);

const arr=[1,2,3,[2,4,[7,8,[8,0]]]]

const real_arr=arr.flat(Infinity);  //Here the argument is the depth till how we want to flat the array


//console.log(real_arr);


console.log(Array.isArray("Kaushik"));  //Queries whether it is a array
console.log(Array.from("Kaushik"));    //Converts to array




