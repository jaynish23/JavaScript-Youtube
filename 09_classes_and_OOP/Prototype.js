let myName = "jaynish     "
let mychannel = "jaynish code         "
// console.log(mychannel.trim().length);

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]
let heroPower ={
    thor: "hammer",
    spiderman : "sling",
    getSpidepower : function(){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}

Object.prototype.jaynish = function(){
    console.log(`Jaynish is present in all objects`);
}
// heroPower.jaynish()
// myHeros.jaynish()


Array.prototype.heyJaynish = function(){
    console.log(`Jaynish says HEllo`);
    
}
// myHeros.heyJaynish()
// heroPower.heyJaynish() // aama error aavse


// Inheritance

const user = {
    name : "chai",
    email : "chaigoogle@gmailcom"
}
const Teacher = {
    makeVideo : true
}
const TeacherSupport = {
    isAvailable : false   
}
const TASupport = {
    makeAssignment :'Js Assignmenet',
    fullTime : true,
    __proto__:TeacherSupport
}
Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeacherSupport,Teacher)

let anotherUsername = "Chai aur code     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`); 
}
anotherUsername.trueLength()

"Jaynish".trueLength()
"KrishnaSupreme".trueLength()