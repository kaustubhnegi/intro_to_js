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

//1.push
console.log("Array before push "+eleArr);

console.log("******************************");

eleArr.push("Pushed new item");

console.log("Array after push "+eleArr);

//2.pop

console.log("Array before pop "+eleArr);

eleArr.pop();

console.log("Array after push "+eleArr);

//3.shift

console.log("Array before shift "+eleArr);

eleArr.shift();

console.log("Array after shift "+eleArr);

//4.unshift

console.log("Array before unshift "+eleArr);
eleArr.unshift("Newly_Added_Item");
console.log("Array after unshift "+eleArr);

//length

let len = eleArr.length;
console.log(len);








