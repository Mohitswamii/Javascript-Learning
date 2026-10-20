// two types of data types  Primitive and Non Primitive 

// Primitive  = 7 types   => String , Number ,Boolean ,Null,undefined, Symbol(unquie),BigInt
//  Call by value copy  krke milta hai copy m change hota hai 


// statical and dynmicall y 
// js dynmically 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null

let userEmail;  // undefined 

const id = Symbol('123')
const anotherId=Symbol('123')
// but they are not same   

console.log(id === anotherId)


const bigNumber = 3432134545324544




// Non Primitve / Reference Type 
// pass by references
// Arrays, Objects , Functions   
// return type   = object aata hai 
// function ka bhi  =  object function kha jata hai 



const heroes = ["shaktiman","naagraj","doga"]

// {}= objects

let myObj= {
    name:"MOhit",
    age:22,
}

//functions(){}

const myFunction = function(){
    console.log("Hello World");
}


// for interview 
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);