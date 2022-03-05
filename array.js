//empty array
let arr = []
console.log(arr);

//array with elements
// 0 Based indexing

let eleArr = [1,2,3,4,5,"String!",true,'c',2.3]
console.log(eleArr);

console.log("Element at 5th index "+eleArr[5]);
console.log("Element at 4th index "+eleArr[4]);

eleArr[3]="Overwriting"

//Array Method

console.log("Array before push "+eleArr);

console.log("******************************");

eleArr.push("Pushed new item");

console.log("Array after push "+eleArr);


