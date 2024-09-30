// for.. of

// ["",""]
// [{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting ="hello world"
for (const greets of greeting) {
    // console.log(`each chare is ${greets}`);
}


// Maps
// the map is object that holds the key-value pair and remember the  original insertion order of the keys.
// const map = new Map()
// map.set('In', "India")
// map.set('Us', "USA")
// map.set('FR', "france")

// unique value
// console.log(map);

// for (const [key,pair] of map) {
    // console.log(key);
    // console.log(pair);
// }


// const myobject={
//     'game1':'vector',
//     'game2':'spiderman'
// }
// for (const [key,value] of myobject) {
//     console.log(key +" >-" + value );
    
// }



// for in loop
const myObj= {
    js: "javascript",
    cpp:"C++",
    rb:"ruby",
    shift:"shift by apple"
}
for (const key in myObj) {
    // console.log(key);
//    console.log("if i have to dind the values then " +myObj[key]);
}

// const programming =["js","rb","py","java"]
// for (const key in programming) {
//    console.log(key); // op is 0,1,2,3
//    console.log(programming[key]);
// }
//  aa map interatable nathi etla mate program run thase pn print nahi thay kasu bi 

// const map = new Map();
// map.set("In", "India");
// map.set("Us", "USA");
// map.set("FR", "france");
// for (const key in map) {
//    console.log(key);
   
// }



// this is higher order function
// forEach
// const coding = ["js","ruby","java","cpp"]

// coding.forEach( function(item) {
//     console.log(item);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// myCoding.forEach((item) => {
//   console.log(item.languageName);
// });

// const coding = ["js", "ruby", "java", "cpp"];
// const values = coding.forEach((item)=>{
    // console.log(item);  
    // return item // aa return kasu nahi kare undefine aavse output ma
// })
// console.log(values);



// filter aama value return thase forEach ma value return nahi thay

const myNums = [1,2,3,5,4,6,7,8]

// const newNums= myNums.filter((num)=>{
//     return num>4
// })

// const newNums = []
// console.log(myNums);
// myNums.forEach((num)=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter((bk) => bk.genre === "History");

// userBooks = books.filter((bk) => {
//   return bk.publish >= 1995 && bk.genre === "History";
// });
// console.log(userBooks);


//map
// const number = [1,2,3,5,6,4,7,7,8,9]
// const newNums = number.map( (num) => { return num + 10})
// console.log(newNums);
// console.log(number);




// Reduce
const myNumbers = [1,2,3,4]
const total = myNumbers.reduce(function(acc,currval){
    console.log(`acc : ${acc} and currval ${currval}`);
    
    return acc + currval
},0)
console.log(total);
