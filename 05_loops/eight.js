// reduce()

// the reduce method executes a user supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. the final result of running the reducer across all element of the array is a single value.

const myNums =[1,2,3]
// const mytotal = myNums.reduce( function(acc,currval){
//     console.log(`acc:${acc} and currval ${currval}`);
    
//     return acc+currval;
// },0 )
const mytotal = myNums.reduce((acc,currval) => acc + currval ,0)
// console.log(mytotal);

// const shoppingCart =[
//     {
//         itemName : "js-course",
//         price : "999"
//     },
//     {
//         itemName : "python-course",
//         price : "1999"
//     },
//     {
//         itemName : "mobile-app-course",
//         price : "2999"
//     },  {
//         itemName : "data-scirnce-course",
//         price : "3999"
//     }
// ]
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);
