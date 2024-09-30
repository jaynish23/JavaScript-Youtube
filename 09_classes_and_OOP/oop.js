const user = {
    username: "jaynish",
    loginCount: 8, 
    signin : true,

    getUserDetails : function(){
        // console.log("go user details from DataBase");
        // console.log(`UserName : ${username}`); it should be error and aane nahi khabar pade ke kaya username nmi vat thai rahi che memory contex ne ema store kai thi thase ena lidhe aapde this keyword use karisu to khabar padse ke kaya context ni vat thai rahi che
        // console.log(`UserName : ${this.username}`);
        console.log(this);   
    }
}

// console.log(user.username);
// console.log(user["loginCount"]);
// console.log(user.getUserDetails());
// console.log(this);
//  aa che aapdu global contxt ma "this" and aapde aane node environment ma run karisu matlab ke ahi run karis to empty object aavse and  agar jo tu console.log(this)  browser ma karis to tane window object malse

// const promiseOne = new Promise
// const date = new Date() 
//  aama je new che e ek keyword che je ek prakar nu constructor function che
//  te kam karse ek object thi multiple object na instance banavi saku and biju kam che e ek prakare excutional context banava ma help karse

function users(username, loginCount,isLoggedIn) {
    // aa variable che = aa aapde je pass karie e che
    this.username = username
     this.loginCount =loginCount
     this.isLoggedIn = isLoggedIn
    
    //  return this
}
// agar aama niche new naa lakhat to badhi value overwrite thai jase
const userOne = new users("Jaynish", 20, true)
const userTwo = new users("chaiaurcode", 20, true)
console.log(userOne);
console.log(userTwo);

