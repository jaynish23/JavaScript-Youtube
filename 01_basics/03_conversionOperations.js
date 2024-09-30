let score = "33abc" 

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber);

let x= null
console.log(typeof x);
let y = Number(x)
console.log(typeof y);
console.log(y);

let a= undefined
console.log(a);
console.log(typeof a);
let b = Number(a)
console.log(b)
console.log(typeof b)


//   "33" => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0

let isLoggedIn = 1
// // let isLoggedIn = "" false
// // let isLoggedIn = "Jaynish"  true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1= > true; 0=> false;
// "" -> false
// "jaynish" -> true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

