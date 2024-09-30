function sayMyname() {
  console.log("j");
  console.log("a");
  console.log("y");
  console.log("n");
  console.log("i");
  console.log("s");
  console.log("h");
}

// sayMyname this is reference
// sayMyname()

// function addTwoNumber(number1, number2)//parameters
// {
//     console.log(number1+number2);
// }
function addTwoNumber(number1, number2) {
  //parameters
  // let result = number1+ number2
  // return result
  return number1 + number2;
}

// addTwoNumber(3,4) //arguments
// addTwoNumber(3,"4") //arguments
const result = addTwoNumber(3, 4);
// console.log("result",result);

function loginUserMessege(username) {
  // if (username === undefined)
  if (!username) {
    console.log("enter valid name");
    return `${username} just logged in`;
  }
}

// console.log(loginUserMessege("jaynish"))
// console.log(loginUserMessege())

// it is called rest operator
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200,300,400,500,5000,600));

const user = {
  username: "jaynish",
  price: 199,
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user)

// handleObject({
// username:"krishna",
// price: 500
// })

const myNewArray = [200, 400, 500, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([500,600,700]))
