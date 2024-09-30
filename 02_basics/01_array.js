// arrays

// const myArr = [0,1,2,3,4, 5]
// myArr.unshift(5);
// console.log(myArr);

// console.log(myArr[0]);

// js creates an array in SHALLOW COPIES.    NOt deep copies
// shallow copies means
// A shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made. inshaort it is the change in the original array also (heap memory concept)

// deep copy
//  a deep copy of an object is a copy whose properties do not share the same reference (stack)

// MDN pr jovanu array na



const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

//  array methods
// myArr.push(6)
// myArr.push(7)
// myArr.push(7)
// myArr.pop()


// console.log(myArr);
// myArr.shift()

// console.log(myArr);

// console.log(myArr.includes(9)) // true and false return karse value ne  and 
// console.log(myArr.indexOf(3))
// indexof je che ema agar value hase e index upar to aapse or to -1 return karse

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);
//  join je che e convert karse array ne string format ma and e bind bi kari dese comma separated ma  


// slice, spice
const myArr = [0, 1, 2, 3, 4, 5];
console.log("A ", myArr);

const mynew1=myArr.slice(1,3)
console.log(mynew1);

console.log("B ", myArr);

const mynew2=myArr.splice(1,3)
console.log("C ",myArr);

console.log(mynew2);