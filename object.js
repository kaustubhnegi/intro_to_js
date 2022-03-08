//object ----> key: value pair
//https://github.com/mohd-aman/FJP6
let obj ={};
console.log(obj);

let objKaus ={
    FirstName   :"Kaustubh",
    Age         :'23',
    PhoneNo     : 78383938383,
    LastName    : "Negi",
};

console.log(objKaus);
console.log(objKaus.LastName);

let capAmerica = {

        Name    : "Steve Rogers",
        AgeCap     : 140,
        Friends : ['Natashsha','Bucky','Sam','Thor','Tony'],

        Adress:{
            city: "Queens",
            Stae: "Haryana",
        },

        sayHi : function(){
            console.log("Captain America says hi");
        }

}

console.log(capAmerica);
console.log(capAmerica.Friends);
console.log(capAmerica.Friends[0]);
console.log("\n***************************");

console.log("CaptainAmerica before update\n");
console.log(capAmerica);

capAmerica.Movies = ["First Avenger","Winter Soldier","Civil War"];

console.log("CaptainAmerica after update\n");
console.log(capAmerica);


capAmerica. sayHi(); 
capAmerica.isAvenger  =false;

console.log(capAmerica.isAvenger);
capAmerica.isAvenger = true;
console.log(capAmerica.isAvenger);

capAmerica.Adress.Stae="Washington DC";

console.log(capAmerica);

// . Typecast object name to string
console.log(capAmerica.Name);
console.log(capAmerica['Name']);
