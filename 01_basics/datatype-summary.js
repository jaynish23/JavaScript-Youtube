// primitive datatype

// 7 types : String number boolean null undefined bigInt symbol

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherID = Symbol('123')

// console.log(id == anotherID);
// //  false
// //false 
// console.log(id === anotherID);


// const bigNumber = BigInt('123456')
// const bigNum = '1233456n'
// console.log(bigNumber);
// console.log(typeof bigNumber);


// js is dyanamically typed language and not static because variables can hold values of different types during runtime.

//  reference type (non primitive)

// array, objects, functions

// const heros = ["shaktiman","flying Jatt", "krish"];

// console.log(typeof heros); // object


// let myObj = {
//     name : "jaynish",
//     age : 21,
// }

// const myFun = function () {
//     console.log("hello world");
// }

// console.log(typeof myFun); // object function che aa o/p ma only function j aavse


// Stack , Heap
//  stack memory use (primitive) , heap memory used in (non Primitive)
// stack mna aapde jetla bi variable declare karisu eni ek copy malse
// heap ma malse reference e hase original value no reference
let myName = "jaynish"
let anotherName = myName
anotherName = "jaynishandcode"

console.log(myName);

console.log(anotherName);

let userone = {
    email: "use@gamil.com",
    upiId: "xyz@paytm"
}
let usertwo = userone

usertwo.email = "jaynish@google.com"
console.log(userone.email);
console.log(usertwo.email);

