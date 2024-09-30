// const tinderUser = new Object() singleton object
const tinderUser={} // non singleton object

tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn =false
// console.log(tinderUser);

const regularUser ={
    email :"jaynish@123.com",
    fullname: {
        userfullname:{
            firstname: "jaynish",
            lastname:"thakkar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"b"
}

// const obj3 ={obj1, obj2}
// const obj3 =Object.assign({},obj1,obj2) 
const obj3 ={...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id :1,
        name: "jaynish"
    },
    {
        id: 2,
        name : "jay"
    }
]

// console.log(user[1].name)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));





// destructuring

const course ={
    coursename: "js in hindi",
    price: 1000,
    courseInstructor : "hitesh"
}
 
// course.courseInstructor
// destructor
const {courseInstructor : instructor} = course
// console.log(courseiInstructor);
// console.log(instructor);


// json format
// {
//     "name": "jaynish",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

// main difference
// const x = new Object() // singleton object che aa and
// const y = {} // aa singleton object nathi