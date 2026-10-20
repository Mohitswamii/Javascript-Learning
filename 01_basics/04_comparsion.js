// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2">1);  // automallically convert js 2 into number
// console.log("02">1);


// never use this type of conversion we avoid 

console.log(null>0);
console.log(null==0);
console.log(null>=0); // conversion problem  

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// comparison and  equality work differently in js 



// strict check  (===)  it also check datatype

console.log("2"===2);