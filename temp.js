var a= [...new Array(5)].map(item => 5)
console.log(a)


var arrLength = 4
var arrVal = 0

var newArr = [...new Array(arrLength)].map(x => arrVal);
// result will be [0, 0, 0, 0]

console.log(newArr)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi",0,2);

console.log(fruits)

console.log('⭐'*2)