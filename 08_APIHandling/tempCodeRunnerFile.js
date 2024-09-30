const promiseSix = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Jaynish" });
    } else {
      reject("Error is there");
    }
  }, 1000);
});
promiseSix.then(
    (user)=>{
        console.log(user);
        return user.userName
    }
).then(function (userName) {
    console.log(userName);
    
})