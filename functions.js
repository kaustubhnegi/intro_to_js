function sayHello(){
    console.log("Hello from functions");
}

sayHello();

//funtions with parameter

function sum(num1, num2){
    let addition = num1+num2;
    console.log("Addition of given number is "+addition);
}
sum(3,5);

function multiply(num1,num2){
    return num1*num2;
}

let ans = multiply(3,5);
console.log(ans);

//Storing function in a variable
let a = function sub(num1,num2){
    return num1-num2;
}
console.log(a(3,5));

//IIFE  Immediately Invoked Functions Expression
(function(){
    console.log("Hello from IIFE");
})();

//IIFE with Parameter
(function(num1,num2){
    console.log(num1/num2);
})(10,5);