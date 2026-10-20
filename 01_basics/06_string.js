const name="Mohit"
const repoCount=50
// console.log(name+repoCount+" Value");  // not used in modern 


// string interpulater  ` => batics
console.log(`Hello My name is ${name} and my rep count is ${repoCount}`);


const gameName = new String ('Mohit-hc-cbt')

// accesing key value pair
console.log(gameName[0]);

console.log(gameName.__proto__); // so many value  use in brower to see objects 

console.log(gameName.length);

console.log(gameName.toUpperCase());  //not changing orginal value 

console.log(gameName.charAt(2));  // checking at 2nd postion what value 

console.log(gameName.indexOf('h'));  // at which postion char


const newString = gameName.substring(0,4); // it will ignore and start with 0 
console.log(newString)

const anotherString = gameName.slice(-7,4);  // only negative value used in slice 
console.log(anotherString)


const newStringOne = "    Mohit    ";
console.log(newStringOne);
console.log(newStringOne.trim());


// replace 

const url ="https://Mohit.com/mohit%20swami"

console.log(url.replace('%20','-'));
console.log(url.includes('Mohit'))


// converting into array 

console.log(gameName.split('-'))  // spliting on the basics of dash





