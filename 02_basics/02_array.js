const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","batman","wonderwoman"]

// // marvelHeros.push(dcHeros)
// // console.log(marvelHeros);
// // console.log(marvelHeros[3][1]);

// // const allheros =marvelHeros.concat(dcHeros)
// // console.log(allheros);

// // spread operator
const allNewHeros = [...marvelHeros,...dcHeros]
console.log(allNewHeros);

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);


// console.log(Array.isArray("jaynish")); // aama value false return thase kem ke aa string che array nathi
// console.log(Array.from("jaynish")); // aa string ne array ma convert kari dese
// console.log(Array.from({name : "jaynish"})); //interseting //empty array

let score1 =100;
let score2 = 200
let score3 =300;
console.log(Array.of(score1,score2,score3));
//array ma convert kari dese
