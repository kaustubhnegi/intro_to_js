let str = "I am a String!"
console.log(str);

//length of a string

let len = str.length;
console.log(len);

//sliced method ----> extract part of a string

let slicedArr = str.slice(2,5);
console.log(slicedArr);

//replace method -----------> replace a part with given word

let replacedStr = str.replace("am","was");
console.log(replacedStr);

console.log(str);

// toUpperCase()

let upperCase = str.toUpperCase();
console.log(upperCase);

// toLowerCase()

let lowerCase = str.toLowerCase();
console.log(lowerCase);

//concat

let firstName = "Kaustubh"
let lastName = "Negi"

let fullName = firstName.concat(lastName);

let fullName2 = firstName + lastName;

//split -----> return arr
let splitted = str.split(" ");
console.log(splitted);

