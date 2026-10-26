// const { use } = require("react");

// const tinderUser = new Object() // singleton object 
// //const tinderUser={}  // non singleton objection

// tinderUser.id="123abc"
// tinderUser.name="Sammy"
// tinderUser.isLoggedIn=false;

//console.log(tinderUser)

// objects in objects

// const regularUser= {
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Mohit",
//             lastname:"Swami"
//         }
//     }
// }

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)


// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}  // same array problem object into object 
//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2)   // {} this is empty object   others are

// better spread operator latest modern
// const obj3={...obj1,...obj2}

// console.log(obj3)

// whenn value comes from databases 

// const users =[
//     {
//         id:1,
//         email:"H@gmail.com"
//     },{
//         id:2,
//         email:"Happy@gmail.com"
//     },
//     {
//         id:3,
//         email:"fdvsgmail.com"
//     },
// ]
// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))




//************destructurning***************/

const course={
    coursename:"Js in Hindi",
    Price: "999",
    courseInstructor:"Mohit"
}

//course.courseInstructor

const {courseInstructor:instructor}=course
// whenever we write instrcutor it will retrn mohit 
console.log(instructor)


// const navbar = ({company}) =>{

// }
// navbar(company="Mohittt")









//************API******************/

// {
//    "name":"MOhit",
//     "coursename":"Js in Hindi",
//     "price":"free"

// }

[
    {},
    {},
    {}
]










