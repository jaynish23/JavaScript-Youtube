// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); true
// console.log("02" > 1); true

// console.log(null > 0); //false
// console.log(null >= 0); // true
// console.log(null == 0); // false

// the reason is that an equality check == and comparision  >, <, >=, <= word efficiently
// comaprision converts null to number treationg it as 0.
// that is why null >= 0 true and null > 0 is false

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined < 0);
// console.log(undefined > 0);
 // undefined ma all false  return  karse wow!!


//  === // strict eqaulity it checks also the datatype

console.log("2" == 2); // true 
console.log("2" === 2); // false
