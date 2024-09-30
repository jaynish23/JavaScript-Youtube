// promise

// the promise object represents the eventual completion or failure of an asynchronous operation and its resulting value

// A Promise has a 3 states
// --> 1) pending : initial state ,  neither fulfilled nor rejected.
// --> 2) fulfilled : meaning that the operation was completed successfully
// --> 3) rejected : meaning that the operation failed

const promiseOne = new Promise(function (resolve, reject) {
  // Do and async task
  // DB calls , cryptography , network
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

// .then() method nu connection che direct resolve ni sathe and .catch() method nu connection che direct rejected ni sathe
promiseOne.then(function () {
  console.log("promise is consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "chai", email: "chaiaurcode123@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ userName: "jaynish", password: "12345" });
    } else {
      reject("ERROR : Something went to wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Ther promise is either fullfilled(resolve) or rejected");
  });


    

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "JS", password: "12345" });
    } else {
      reject("ERROR : JS went to wrong");
    }
  }, 1000);
});

// promise ek object che (eventual completion object che)
// async function ConsumePromiseFilve() {
// const response = await promiseFive
// console.log(response);
// }
// ConsumePromiseFilve()

async function ConsumePromiseFilve() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

ConsumePromiseFilve()


async function getAllUsers() {
  const response =  await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(response);
  
  const data =await response.json()
  console.log(data);
}
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})

// what is fetch()?
//  --> the global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

//  A fetch() promise only rejects when a network error is encountered( which is usually when there's permission issue or similar ). A fetch() promise doesnot reject on HTTP errors(404, etc). Instead, a then() handler must check the Response.ok and/or Response.status properties.