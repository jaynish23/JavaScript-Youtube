// call method and this method agar interview ma puche to aa j samajavanu

function SetUsername(username){
    this.username =username
    console.log("called");
    
}

function createUser(username, email, password) {
    SetUsername.call(this,username)
    // this.username = username
    this.email= email
    this.password =password
}

const chai = new createUser("chai",  "chai@gamil","123456")
console.log(chai);
