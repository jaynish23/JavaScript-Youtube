// singleton constructor thi banavaisu etle singleton
// object.create

// literals thi nahi bane singleton

// object literals

const mySym = Symbol("key1")

const jsUser ={
    name: "jaynish",
    "full name": "Jaynish Thakkar",
    [mySym] : "mykey1",
    age : 18,
    location: "jaipur",
    email: "google@123.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["mySym"]);

// jsUser.email = "jaynish@123.com"
// console.log(jsUser.email);


// freeze aagad value change nahi thava de
// Object.freeze(jsUser)
// jsUser.email= "jaynis@1234.xyx.xom"
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("hello js user");
    
// }

// jsUser.greetingtwo = function(){
//     console.log(`hello js user ${this["full name"]}`)
// }
// console.log(jsUser.greeting()); 
// console.log(jsUser.greetingtwo()); 

