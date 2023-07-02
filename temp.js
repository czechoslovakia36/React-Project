var a= [...new Array(5)].map(item => 5)
// console.log(a)


var arrLength = 4
var arrVal = 0

var newArr = [...new Array(arrLength)].map(x => arrVal);
// result will be [0, 0, 0, 0]

// console.log(newArr)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi",0,2);

// console.log(fruits)

// console.log('⭐'*2)


// console.log(Array(3).fill())


let arr=[1,2,3,4,5]


let output = arr.reduce((acc,item)=> acc+item)

let output2= arr.reduce((acc,item)=> acc+item,5)

console.log(output)
console.log(output2)