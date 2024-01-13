//node 05_Iterations/6.js

const coding=["js","python","Ruby","Cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
   
// })

//console.log(values);  //This will be undefined and wiill not return anything
 //for each loop will not return anything


//  //Filter Operation
//  const myNum=[1,2,3,4,5,6,7,8,9,10]

//  const values=myNum.filter((num) => num > 4) //Filter also takes call back function


//  console.log(values);  //Fliter operations returns the values

// const newNums=myNum.filter( (num) => {
//     return num>8
// })
 
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userBooks =books.filter((bk) => bk.genre==='History')  //To scrap the books whose genre is History

  userBooks =books.filter((bk) => {
    return bk.publish>2000 && bk.genre === 'History'
}) //always use return keyword while using scope

  console.log(userBooks);

