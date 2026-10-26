const myArr= [0,1,2,3,4,5]     // 0 ,1 2,3  are elemnts 

// console.log(myArr[0]);

// // create shallow copies   =  share same reference point  orginal m change 
// // deep copy = does not share same references 

// const myHeroes = ["shaktiman","naagraj"]
// const myArr2= new Array(3,4,6,7,8,1)
// console.log(myArr2[0]);


// // Array Methods 


// // myArr.push(6) // add elements
// // myArr.push(7) 
// // myArr.pop() // remove last element


// myArr.unshift(9) // inserting in the array starting 
// // but this is not good because if 10k then all array shift to next postion 

// myArr.shift()  // remove first elemnt

// console.log(myArr);


// console.log(myArr.includes(4));  // check wheter it is present or not   it will return in boolena value 
// console.log(myArr.indexOf(2));   // if -1 then it does not exist 
//console.log(myArr.lastIndexOf(2));   
//console.log(myArr.length);   


// const newArr= myArr.join()   // join convert into string 

// console.log(myArr)
// console.log(newArr)  // type change  all values convert to string
// console.log(typeof newArr)



// slice , splice

console.log("A ",myArr);

console.log("MOhit")

const myn1= myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)

console.log("Mohit")


const myn2 = myArr.splice(1,3)

console.log("C ",myArr)
console.log(myn2)


// orginal array manuipluation y using splice    important interview question 




// slice  
// arr.slice(starting index,till how much you delete)
const change= myArr.splice(1,3);
console.log(change)
console.log(myArr)



// slice is ued to extreact partical element 
// the orginal array will not be modified 


