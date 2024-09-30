console.log("hello" + " World")


const name = "jaynish"
const repocount = 10
// console.log(name + repocount +" value");

console.log(`hello my name is ${name} and repo count is ${repocount}`);

const gameName = String("jaynish-jt")

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(2,4) // aama negative value nahi  apay
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "     jaynish    "
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhtri"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'))