const marvel_heroes =["thor","Ironman","Spiderman"]
const dc_heroes =["Superman","flash","Batman"]

//marvel_heroes.push(dc_heroes)   // Arrays ke andar array aa gya 
// array koi bhi data le leta hai array hi le liya array ne 

// console.log(marvel_heroes)
// console.log(marvel_heroes[3])
// console.log(marvel_heroes[3][1]) // not good syntax for merging 

// concat

// const allHeroes = marvel_heroes.concat(dc_heroes)   // concat return new array 
// console.log(allHeroes)


// spread 

const all_new_heros = [...marvel_heroes,...dc_heroes]

console.log(all_new_heros)


// complex  = array into another array 
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Mohit"))
console.log(Array.from("Mohit")) // converting into array 
console.log(Array.from({name: "mohit"}))   // if it cannot create it will  give empty array   Intersting   for interview   keys value

let score1 =100 
let score2 =200 
let score3 =300

console.log(Array.of(score1,score2,score3))// converting all into array









