
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);

const chai = {
  name: "masala-chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nhi bni");
  },
};
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai)); amswe is undefined

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable : false,
    enumerable :false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}