class Pet{
    constructor(name,age,type,breed,gender,services,owner,contactPhone, price, color){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.services=services;
        this.owner=owner;
        this.contactPhone=contactPhone;
        this.price=price;
        this.color=color;
    }
}


function GetServicesPrices(Services){
    var Price=0;

    if(Services==="Shower"){
        Price = 25;
    }else if(Services==="Hair cut"){
        Price = 50;
    }else if(Services==="Gold services"){
        Price = 150;    
    }else if(Services==="Full services"){
        Price = 200;
    }
    return Number(Price);
}

var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Rio Soto la Marina, 208, Mexicali BC",
        number: "49"
    },
    hours:{
        open: "8:00 am",
        close: "4:00 pm"
    },
    pets:[    ]
}

var pet1 = new Pet("Money",7,"Dog","Chiwini", "Male", "Shower", "Faby", "6861547890", GetServicesPrices("Full services"),"#511e46");
var pet2 = new Pet("Shady",7,"Dog","Pug", "Female", "Full services", "Faby", "6861547890",GetServicesPrices("Full services"),"#511e46");
var pet3 = new Pet("Sebastian",2,"Fish","Cangrejo", "Male", "Full services", "Faby", "6861547890",GetServicesPrices("Full services"),"#900707");
var pet4 = new Pet("Nemo",4,"Fish","Payaso", "Male", "Gold services", "Faby", "6861547890",GetServicesPrices("Gold services"),"#c57510");
var pet5 = new Pet("Peter Parker",4,"Spider","Spider Man", "Male", "Full services", "Faby", "6861547890",GetServicesPrices("Full services"),"#b70000");
var pet6 = new Pet("Chitta",6,"Dog","Dog", "Male", "Shower", "Faby", "6861547890",GetServicesPrices("Gold services"),"#511e46");

ObjSalon.pets.push(pet1);
ObjSalon.pets.push(pet2);
ObjSalon.pets.push(pet3);
ObjSalon.pets.push(pet4);
ObjSalon.pets.push(pet5);
ObjSalon.pets.push(pet6);

//console.log(ObjSalon.pets);
//get the inputs and store them in variables
var txtName = document.getElementById("name");
var txtage = document.getElementById("age");
var txttype = document.getElementById("type");
var txtbreed = document.getElementById("breed");
var txtgender = document.getElementById("gender");
var txtservices = document.getElementById("services");
var txtowner = document.getElementById("owner");
var txtcontactphone = document.getElementById("contactphone");
var txtcolorpet = document.getElementById("colorpet");

function clearInputs(){
    txtName.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtservices.value="";
    txtowner.value="";
    txtcontactphone.value="";
    txtcolorpet.value="#000000";
}

function register(){
    //create the Pet

    var NewPet = new Pet(txtName.value,txtage.value,txttype.value,txtbreed.value,txtgender.value, txtservices.value, txtowner.value, txtcontactphone.value, GetServicesPrices(txtservices.value), txtcolorpet.value);

    //Push the new pet
    ObjSalon.pets.push(NewPet);

    clearInputs();

    //console.log(ObjSalon.pets);
    
    display(ObjSalon);
}

