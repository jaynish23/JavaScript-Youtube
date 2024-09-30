// dates
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());

// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date(2023,0,23 , 5,3 )
// console.log(myCreateDate.toLocaleString());

// let myDate = new Date ("2023-01-14")
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let mydate = new Date ("01-14-2023")
// console.log(mydate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

// console.log(mydate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);


// customize karva mate tolocaleString() ne
newDate.toLocaleString('default',{
    weekday:'long'
    
})