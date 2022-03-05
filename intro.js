console.log("Swagat hai aap logo ka");
let num =10;
console.log(num);

let char ='a';
console.log(char);

let str = "This is a string";
console.log(str);

let bool = true;
console.log(bool);

for(let i=1;i<=5;i++){
    console.log(i);
}

let count =10;
while(count>0)
{
    console.log(count);
    count--;
}

//isPrime
let a=41;
let flag=true;
for(let i=2; i*i<a;i++){
    if(a%i==0){
        flag=false;
        break;
    }
}
if(flag==true)
console.log("Prime Number");
else
console.log("Not a Prime Number");
