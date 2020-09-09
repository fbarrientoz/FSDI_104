//Create an objetc literal for the pet salon (name, adrees, hours)``
var salon ={
        salonName : 'The Fashion Pet',
            adress: {
                street:'Av. University',
                number:"215-B"
            },
            hours:{
                open:"8 a.m.",
                close:"5 p.m."
            },
            pets:[
                {//Object One
                    name:"Scooby",
                    age:5,
                    type:"Dog",
                    breed:"Dane",
                    gender:"Male"
                },
                {//Object Two
                    name:"Tweety Bird",
                    age:5,
                    type:"Bird",
                    breed:"Canarian",
                    gender:"Male",
                },
                {//Object Three
                    name:"Scrapy",
                    age:5,
                    type:"Dog",
                    breed:"Dane",
                    gender:"Male"
                },
                {//Object Four
                    name:"Shady",
                    age:5,
                    type:"Dog",
                    breed:"Xolo",
                    gender:"Male"
                },
                {//Object Five
                    name:"Doggy",
                    age:5,
                    type:"Dog",
                    breed:"Chiwini",
                    gender:"Male"
                } 
    ]
}

//  console.log(salon.adress.street);
// var {salonName, adress:{street,number},hours:{open,close}}= salon;
// console.log (street);
// console.log (salon.pets);

//Create an array with pets (Objects literal) (name, breed, gender, type, service)

//Function to Display on the console tha names of the pets (travel array)
PetsName();

function PetsName() {
    for(var i=0; i<salon.pets.length;i++)
    {
        console.log(salon.pets[i].name);
    }
}

function displayNumbers() {
    console.log(`There are ${salon.pets.length}`);
}

displayNumbers();
PetsName();




//Function to Display on console the number of registered pets


//Extra HW(not graded)Display the oldest pet and the yougest