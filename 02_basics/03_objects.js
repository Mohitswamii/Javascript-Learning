// singleton 
// /Object.create


// object literals


const mySym= Symbol("Key1")

const JsUser = {
    name : "Mohit",  // key => name  value=> "mohit"
    // but in the bakend name is always or anthing key is treating in string form
    "full name":"Mohit swami",
    mySym:"mykey1",  // dataype  is symbol but showing string  ** interview**
    [mySym]:"mykey1", 
    age :18,
    location:"Delhi",
    email:"mohit@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.age)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // we cannot write in  . form  
// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])



// JsUser.email="Mohit@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email="mohit@micrsoft.com"
// console.log(JsUser)

// frezze is used to lock the element you cannot change it will be immutable 

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
