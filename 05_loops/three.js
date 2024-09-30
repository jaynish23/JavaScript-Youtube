// for of 

// ["", " " ,""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(arr);
}

const greetings ="Hello world"
for(const greet of greetings){
    console.log(`each of the char is ${greet}`);   
}

// Maps
// the map object holds key value pairs and remember the original insertion order of the keys. Any value may be used either a key or a value.

const map = new Map()
map.set('IN',"India")
map.set('US',"United States of America")
map.set('Fr', "France")

// console.log(map);
for (const [key,value] of map) {
    console.log(key, ':-',value );
}


// object ma for of loop use nahi thay
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }