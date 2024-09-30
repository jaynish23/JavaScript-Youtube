// global scope
// var c=400

let a=300

// block scope
{
    let a= 10;
// const b=20;
// var c= 30
// console.log("inner :",a);

}
// console.log(a);
// console.log(b);
// console.log(c);

// function one() {
//     const username = "jaynish"
//     function two() {
//         const website = "youtube"
//         console.log(username);
        
//     }
    // console.log(website);
    
//     two()
// }
// one()

// if (true) {
//     const username= "jaynish"
//     if (username ==="jaynish")
//         {
//             const website = " youtube"
//     // console.log((username + website));
//         }
//         // console.log(website);
        
// }
// console.log(username);


// +++++++++++++++interesting++++
// normal function
// console.log(add1(5))
// function add1(num) {
//     return num+1
// }


// function j che pn aa expression jema te veriable ni sathe json value ne badhu banavse
// it is called hoisting aama error aavse
// add2(5)
// const add2 = function(num){
//     return num +2
// }


// revision
function one(){
    const username="jaynish"
    function two(){
        const website="youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username="jaynish"
    if(username==="jaynish"){
        const website="youtube"
        // console.log(website+username);
    }    
    // console.log(website);
    
}
// console.log(username);


// hoisting
console.log(addone(5));
function addone(num){
    return num+1
}

// aama nahi thay kem ke function e expression ni store thay che variable ma tena lidhe

addtwo(5);
const addtwo = function(num){
    return num+2
}
