// this keyword
// current context batavse

const user={
    username : "jaynish",
    price: 999,
    welcomeMessege: function(){
        console.log(`${this.username} , welcome to website`);
       
        
    }
}

// browser ma je global object e window object che matlab ke brower ma jai ne console.log(this) kris to te time pr window object malse 

// user.welcomeMessege()
// user.username ="krishna"
// user.welcomeMessege()
// console.log(this);

// function chai(){
    // let username = "jaynish"
    // console.log(this);
// aama agar aapde this lakhisu to aani andar <ref *1> Object [global] {


//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: value],
//   navigator: [Getter],
//   crypto: [Getter]
// }
// aatlu badha object aavse

    // aama undefine aavse kem ke e  khali  object ma j kam karse or so this,username = undefined
// }
// chai()

// const chai = () => {
//     let username="jaynisj"
//     console.log(this);
//     // aama khali empty object aavse -> {}
// }
// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// agar{} aama aapde return keyword lakhvo padse and this is called explicit  return

// aapde agar () curly braces use karisu to aama return statement lakhvani jarur nathi aa che ek prakar nu impicit return and aa syntax react ma kam lagse
// const addTwo = (num1,num2)=>  (num1+num2)
const addTwo = (num1,num2)=>  ({username:"jaynsihj"})
    

console.log(addTwo(5,6));

