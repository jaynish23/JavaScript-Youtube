class User{
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor (username, email, password){
        super(username)
        this.email =email
        this.password= password
    }
    addCourse () {
        console.log(`A new course is added by the ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@google", "123")
console.log(chai.addCourse());

chai.logMe()

const masalachaoi = new User("masalachai")
masalachaoi.logMe()

// console.log(chai === Teacher); false
// console.log(chai instanceof Teacher); // true
// console.log(chai instanceof User); //true
