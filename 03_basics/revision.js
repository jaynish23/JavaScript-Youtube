const user ={
    username: "jaynish",
    price:999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);   
        console.log(this);
         
    }
}
// user.welcomeMessage();
// user.username="krishna thakkar"
// user.welcomeMessage();


// node environment ma this key words refer karse empty object ne
// browser ma karat to bau badhu aavse (window object aavse badha)
// console.log(this);

// function chai() {
//     let username= "jayunsi"
//     console.log(this.username);
//     // this valu khali object ma j work karse function ma work nahi kare 
//     // aama output undefine aavse
// }
// chai()

const chai = () =>{
    let username ="jaynish"
    console.log(this.username);
    // same undefine result ma aavse 
    // console.log(this); // op {}
    
}
chai()

