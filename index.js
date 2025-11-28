// var age = 13;
// var isAmmitted = age >= 14;
// console.log("è ammesso in sala: " + isAmmitted);

//var isFemale = true;
// var gender = prompt("Inserisci il tuo gender ");
// var height = Number(prompt("Inserisci la tua altezza in metri "));
// var weight = Number(prompt("Inserisci il tuo peso in kg "));

// var BMI = weight / (height ** 2);

// //var isAmmitted = gender == "female" && BMI > 25;
// console.log("ammettibilità " + (gender == "female" && BMI > 25));

// prices = [100, 50, 30, 20, 10];
// console.log(prices);
// prezzi = prices

// prezzi [0] = 90;
// console.log(prezzi);
// console.log(prices);

// var words = ["ciao", "ragazzi", "come", "state"];

// words.forEach(element => {console.log(element);});
// console.log(words.join(" "));

// for (var i = 0; i < words.length; i++) {
//     console.log(words[i]);
// }

// console.log(words[0] + " " + words[1] + " " + words[2] + " " + words[3]);

// cicPrizes = [3.5, 7.0, 2.0, 4.5];
// var tariffs = [34, 20, 46, 32];
// var total = [];
// for (var i = 0; i < cicPrizes.length; i++) {
//     total[i] = cicPrizes[i] + (cicPrizes[i]/100 * tariffs[i]);
//     console.log("Il prezzo totale è " + total[i]);
// }

// console.log(total); 


// total[0] = cicPrizes[0] + (cicPrizes[0]/100 * tariffs[0]);
// total[1] = cicPrizes[1] + (cicPrizes[1]/100 * tariffs[1]);
// total[2] = cicPrizes[2] + (cicPrizes[2]/100 * tariffs[2]);
// total[3] = cicPrizes[3] + (cicPrizes[3]/100 * tariffs[3]);
// console.log(total);


// var num = 38;
// console.log("Il numero è " + (num % 2 ? "dis" : "") + "pari");


// var importo = 90;
// console.log ("Da pagare: " + (importo - (importo >= 100 ? importo * 0.2 : 0)));

// var pwd = prompt ("Inserisci la password ");
// alert("Accesso " + (pwd === "HackerinoTopolino99!" ? "Benvenuto Admin" : "Password Errata"));

// var drink = Number(prompt(" 1 - acqua \n 2 - cocacola \n 3 - sprite \n Seleziona la tua bevanda: "));

// switch (drink) {
//     case 1:
//         alert("Erogazione acqua in corso");
//         break;
//     case 2:
//         alert("Erogazione cocacola in corso");
//         break;
//     case 3:
//         alert("Erogazione sprite in corso");
//         break;
//     default:
//         alert("Bevanda non disponibile");
//         break;
// }

// var vel = Number(prompt("Inserisci la velocità della tua auto in km/h: "));

// if (vel > 200) {
//     alert("Multa 1000 euro.");
// } else if (vel > 160) {
//     alert("Multa 500 euro.");
// } else if (vel > 130) {
//     alert("Multa 200 euro.");
// } else {
//     alert("Limite rispettato");
// }
/*
var items = [10.5, 20.0, 5.5, 3.0, 15.0];
var sum = 0;

var prices = [15.0, 3.5, 10, 25, 9.99];

//for (var i = 0; i < prices.length; i++) {
var i = 0;
while (i < prices.length) {
    if (prices[i] >= 10) {
        sum += prices[i];
    }
    i++;
}
console.log("La somma totale è: " + sum);

var msg = "ciao mamma guarda come mi divertoooo... con cantatuuu!!!";
var count = 0;
for (var i = 0; i < msg.length; i++) {
    if (msg[i] == 'o') {
        count++;
    }
}
console.log("Il numero di 'o' è: " + count);
*/
// function scassa(a){
//     a += " mondo";
//     console.log(a);
// }

// var arr = "ciao";

// console.log(arr);
// scassa(arr);

// console.log(arr);

// //**********************

// function prodotto(a, b){
//     return a * b;
// }

// console.log(prodotto(3, 4));

// //**********************

// function isequal(a, b){
//     return a === b;
// }

// console.log(isequal(3, "3"));

// //**********************

// function printFullName(firstName, lastName){
//     console.log(firstName + " " + lastName);
// }

// printFullName("Maria", "Rossi");

// //**********************

// function fullName(firstName, lastName){
//     return firstName + " " + lastName;
// }

// console.log(fullName("Mario", "Rossi"));

// //**********************

// function listNumbers(fine){
//     for(var i = 0; i <= fine; i++){
//         console.log(i);
//     }
// }

// listNumbers(10);

// //**********************

// function printArray(arr){
//     for(var i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// printArray([3, 5, 7, 9]);

// //**********************

// function sommaAray(arr){
//     var somma = 0;
//     for(var i = 0; i < arr.length; i++){
//         somma += arr[i];
//     }
//     return somma;
// }

// console.log(sommaAray([3, 5, 7, 9]));

// //**********************

// function velox(vel, targa){
//     if (vel <= 130 || targa == "dh012lr") {
//         return targa + " ha rispettato il limite";
//     } else if (vel <160) {
//         return targa + " Multa 200 euro.";
//     } else if (vel < 200) {
//         return targa + " Multa 500 euro.";
//     } else
//         return targa + " Multa 1000 euro.";
// }

// console.log(velox(250, "dh012lr"));
// console.log(velox(150, "ab123cd"));

// //**********************

// function trovaNumero(arr, num){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(trovaNumero([3, 5, 7, 9], 7));
// console.log(trovaNumero([3, 5, 7, 9], 4));

// //**********************

// function indexOf(arr, num){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(indexOf([3, 5, 7, 9], 7));
// console.log(indexOf([3, 5, 7, 9], 4));

// function testScope(){
//     let y = 20;

//     let x = 30;
//     console.log(x);
//     console.log(y);
// }
// function testScope(x,y,z){

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// function testScope(x,y){

//     console.log(x);
//     console.log(y);
// }



// testScope();
// testScope(99,22);
// testScope(5,6,7);
// // console.log(y);

// function user(nome, cognome, età){
//     let user = new Object();
//     this.nome = nome;
//     this.cognome = cognome;
//     this.età = età;
//     this.saluta = function(){
//         console.log("Ciao, sono " + this.nome + " " + this.cognome);
//     }
//     this.printFullName = function(){
//         return this.nome + " " + this.cognome;
//     }
//     return user;
// }
// let eric = user("Eric", "Cartman", 10);
// // eric.peso = 80;
// // eric.saluta = function(){
// //     console.log("Ciao, sono " + this.nome + " " + this.cognome + " e peso " + this.peso + " kg");
// // }
// // let kenny = new User("Kenny", "McCormick", 9);
// // let stan = new User("Stan", "Marsh", 10);
// console.log(eric);
// console.log(kenny);
// console.log(stan);

// eric.saluta();
// kenny.saluta();
// stan.saluta();



// class Rectangle
// {
//     constructor(base, altezza){
//     this.base = base;
//     this.altezza = altezza;
//     }

//     area(){
//         return this.base * this.altezza;
//     }
//     perimetro(){
//         return 2 * (this.base + this.altezza);
//     }
//     printAll(){
//         console.log("Base: " + this.base + ", Altezza: " + this.altezza + "\nArea: " + this.area() + ", Perimetro: " + this.perimetro());
//     }
// }

// let r1 = new Rectangle(4, 5);
// console.log("Area: " + r1.area());
// console.log("Perimetro: " + r1.perimetro());
// let r2 = new Rectangle(7, 3);
// console.log("Area: " + r2.area());
// console.log("Perimetro: " + r2.perimetro());
// r2.printAll();


// class Post {
//     constructor(titolo, contenuto, likes) {
//         this.titolo = titolo;
//         this.contenuto = contenuto;
//         this.likes = likes;
//     }
//     increaseLike() {
//             this.likes++;
//         };
// }

// let post1 = new Post("Primo post", "Questo è il contenuto del primo post", 0);
// console.log(post1);
// post1.increaseLike();
// console.log("Likes dopo incremento: " + post1.likes);
// let post2 = new Post("Secondo post", "Questo è il contenuto del secondo post", 5);
// console.log(post2);
// post2.increaseLike();
// console.log("Likes dopo incremento: " + post2.likes);

// function sum(a, b){
//     console.log(a + b);
// }

// let a = new sum(3, 4);
// console.log(a);
/*
class User {
    static nextId=1;

    constructor(nome, cognome, età){
        this.id = User.nextId;
        User.increaseNextId();
        this.nome = nome;
        this.cognome = cognome;
        this.età = età;
    }
    saluta(){
        console.log("Ciao, sono " + this.nome + " " + this.cognome);
    }

    static increaseNextId(){
        User.nextId++;
    }
}
// User.nextId = 1; //Proprietà statiche
// User.nincreaseNextId = function(){ //Metodo statico
//     User.nextId++;
// }

class Post {
    constructor(titolo, contenuto, autore) {
        this.titolo = titolo;
        this.contenuto = contenuto;
        this.autore = autore;
        this.likes = [];

    }
    increaseLike(utente) {
            this.likes[this.likes.length] = utente;
        };
    numberOfLikes() {
            return this.likes.length;
        }
}

let eric = new User("Eric", "Cartman", 10);
let kenny = new User("Kenny", "McCormick", 9);
let stan = new User("Stan", "Marsh", 10);
console.log(eric);
console.log(kenny);
console.log(stan);
let post1 = new Post("Primo post", "Questo è il contenuto del primo post", eric);
console.log(post1);
post1.increaseLike(kenny);
post1.increaseLike(stan);
post1.increaseLike(eric);
console.log("Likes dopo incremento: " + post1.numberOfLikes());
console.log(post1);


*/

/*
class Invoice {
    static nextNumber = 1;
    static increaseNextNumber() {
        Invoice.nextNumber++;
    }
    constructor(descrizione, quantità, unitPrice, cliente, importo) {
        this.numero = Invoice.nextNumber;
        Invoice.increaseNextNumber();
        this.descrizione = descrizione;
        this.quantità = quantità;
        this.unitPrice = unitPrice;
    }
    getTotal() {
        return this.quantità * this.unitPrice;
    }
    getTotalDiscounted(discount) {
        return this.getTotal() * (1.0 - discount / 100.0);
    }
}

let fatture = [
    new Invoice("Computer", 2, 1500),
    new Invoice("Stampante", 1, 300),
    new Invoice("Monitor", 3, 400)
];
let total=0;
let totalDiscounted=0;
for (let i = 0; i < fatture.length; i++) {
    total += fatture[i].getTotal();
    totalDiscounted += fatture[i].getTotalDiscounted(10);
}
console.log("Importo totale di tutte le fatture: " + total + "\nImporto totale scontato del 10% di tutte le fatture: " + totalDiscounted);

let inv1 = new Invoice("Computer", 2, 1500);
console.log(inv1);
console.log("Importo totale: " + inv1.getTotal());
console.log("Importo totale scontato 10%: " + inv1.getTotalDiscounted(10));
let inv2 = new Invoice("Stampante", 1, 300);
console.log(inv2);
console.log("Importo totale: " + inv2.getTotal());
console.log("Importo totale scontato 5%: " + inv2.getTotalDiscounted(5));
let inv3 = new Invoice("Monitor", 3, 400);
console.log(inv3);
console.log("Importo totale: " + inv3.getTotal());
console.log("Importo totale scontato 15%: " + inv3.getTotalDiscounted(15));
*/
/*
class Account {
    constructor(IBAN, balance) {
        this.IBAN = IBAN;
        this.balance = balance;
    }

    leggiSaldo() {
        return this.balance;
    }
    versa(amount) {
        this.balance += amount;
    }
    preleva(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Fondi insufficienti per il prelievo di " + amount + " dall'account " + this.IBAN + ".");
        }
    }
    static transfer(from, to, amount) {
        if (amount <= 0)
            console.log("L'importo da prelevare deve essere positivo.");
        else if (from.leggiSaldo() >= amount) {
            from.preleva(amount);
            to.versa(amount);
            console.log("Trasferimento di " + amount + " da " + from.IBAN + " a " + to.IBAN + " effettuato con successo.");
        } else {
            console.log("Fondi insufficienti per il trasferimento di " + amount + " da " + from.IBAN + " a " + to.IBAN + ".");
        }
    }
}
let Manuela = new Account("IT1234567890", 10000);
let Marco = new Account("IT0987654321", 5000);
console.log(Manuela);
console.log(Marco);
Account.transfer(Manuela, Marco, 1000);
console.log(Manuela);
console.log(Marco);
Account.transfer(Marco, Manuela, 7000);
console.log(Manuela);
console.log(Marco);
Account.transfer(Marco, Manuela, -1000);
console.log(Manuela);
console.log(Marco);
*/
// class Bestia{
//     constructor(nome, specie){
//         this.nome = nome;
//         this.specie = specie;
//     }
//     verso(){
//         console.log("Non lo so cosa fa il " + this.specie);
//     }
// }

// class Cane extends Bestia{
//     constructor(nome, razza){
//         super(nome, "Cane");
//         this.razza = razza;
//     }
//     verso(){
//         console.log("Bau Bau");
//     }
// }
// class Gatto extends Bestia{
//     constructor(nome, colore){
//         super(nome, "Gatto");
//         this.colore = colore;
//     }
//     verso(){
//         console.log("Miao Miao");
//     }
// }
// class Mucca extends Bestia{
//     constructor(nome, lattePerGiorno){
//         super(nome, "Mucca");
//         this.lattePerGiorno = lattePerGiorno;
//     }
//     verso(){
//         console.log("Muuu Muuu");
//     }
// }

// let bestie = [
//     new Cane("Fido", "Labrador"),
//     new Gatto("Whiskers", "Nero"),
//     new Mucca("Betsy", 20),
//     new Bestia("Drago", "Drago")
// ];
// for(let bestia of bestie){
//     bestia.verso();
// }



/*
class employee {
    constructor(name, salary, bornYear, hiringYear) {
        this.name = name;
        this.salary = salary;
        this.bornYear = bornYear;
        this.hiringYear = hiringYear;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    getAge() {
        return new Date().getFullYear() - this.bornYear;
    }
    getYearsOfService() {
        return new Date().getFullYear() - this.hiringYear;
    }
}

class Teaceher extends employee {
    constructor(name, salary, bornYear, hiringYear, subject) {
        super(name, salary, bornYear, hiringYear);
        this.subject = subject;
    }
    getDetails() {
        return "Name: " + this.name + ", Subject: " + this.subject + ", Age: " + this.getAge() + ", Annual Salary: " + this.getAnnualSalary();
    }
    printSubject() {
        console.log(this.name + " teaches " + this.subject);
    }
}
class Officer extends employee {
    constructor(name, salary, bornYear, hiringYear, weapon) {
        super(name, salary, bornYear, hiringYear);
        this.weapon = weapon;
    }
    printWeapon() {
        console.log(this.name + " carries a " + this.weapon);
    }
    getAnnualSalary() {
        let riskIndennity = 0;
        switch (this.weapon) {
            case "Pistol":
                riskIndennity = 1000;
                break;
            case "Rifle":
                riskIndennity = 2000;
                break;
            case "Shotgun":
                riskIndennity = 3000;
                break;
            default:
                riskIndennity = 0;
        }
        // console.log(super.getYearsOfService()+"\n"+this.getYearsOfService());
        return super.getAnnualSalary() + riskIndennity *12 + super.getYearsOfService() * 100 * 12;
    }
}

let employees = [
    new Teaceher("Alice", 3000, 1980, 2010, "Mathematics"),
    new Teaceher("Bob", 3200, 1975, 2005, "History"),
    new Officer("Charlie", 2800, 1985, 2012, "Pistol"),
    new Officer("Dave", 2900, 1990, 2015, "Rifle"),
    new Officer("Eve", 3100, 1988, 2013, "Shotgun"),
    new Teaceher("Frank", 3300, 1978, 2000, "Science"),
    new Officer("Grace", 3000, 1992, 2018, "Manganello")
];
for (let emp of employees) {
    console.log(emp.name);
    console.log(emp.getAnnualSalary());
    console.log(emp.getAge());
}
*/

// class Garage {
//     constructor() {
//         this.auto = [
//             { brand: "Toyota", model: "Corolla" },
//             { brand: "Honda", model: "Civic" },
//             { brand: "Fiat", model: "Punto" },
//             { brand: "Fiat", model: "Panda" }
//         ];
//     }
//     modelsPerBrand(brand) {
//         let models = [];
//         for (let i = 0; i < this.auto.length; i++) {
//             if (this.auto[i].brand === brand) {
//                 models[models.length] = this.auto[i];
//             }
//         }
//         return models;
//     }
// }

// let myGarage = new Garage();
// for (let car of myGarage.modelsPerBrand("Fiat")) { console.log(car.brand + " " + car.model); }

// class User {
//     constructor(...args){
//         this.nome = args[0];
//         this.cognome = args[1];
//         this.età = args[2];
//     }
//     saluta(){
//         console.log("Ciao, sono " + this.nome + " " + this.cognome);
//     }
// }

// let arr = ["nome", "cognome", "età"];
// let eric = new User("Eric", "Cartman", 10);

// console.log(eric);

// let {nome, cognome, età} = eric;
// console.log(nome);
// console.log(cognome);
// console.log(età);

// console.log({...eric});


// let roles = ['portiere', 'difensore', 'centro 1', 'centro 2', 'attaccante'];
// let result = roles.join(';');
// console.log(result);
// console.log(typeof result);

// console.log(Math.random());

// function calculate(operations, ...args){
//     let result = [0,1,1,0];

//     for(let i=0; i < operations.length; i++){
//         for (let j=0; j < args.length; j++) {
//             result[i]=operations[i](result[i], args[j]);
//         }
//     }
//     return result;
// }

//     console.log(...calculate([
//         function(a,b){ return a + b; },
//         function(a,b){ return a * b; }, 
//         function(a,b){ return a / b; },
//         function(a,b){ return a - b; },
//         ], 
//         10, 5,3,6));


// let array = [3,5,7,9,11];

// array.forEach(function(element, index){
//     console.log("Elemento in posizione " + index + ": " + element);
// });

// let arrayNuovo= array.map(function(element){
//     return element * 2;
// });
// console.log(arrayNuovo);





/*
let parole = ["ciao", "mondo", "javascript", "funzioni", "oggetti"];

    paroleGrandi = parole.map(function(parola){
        return parola.toUpperCase();
    });

console.log(paroleGrandi);

let prezzi = [100, 250, 50, 75, 300];
let prezziInflazionati = prezzi.map(function(value){
    return value * 1.057;
});
console.log(prezziInflazionati);


class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    toString() {
        return this.brand + " " + this.model;
    }
}

class Garage {
    constructor(name) {
        this.name = name;
        this.cars = [];
    }
    addCar(brand, model) {
        this.cars[this.cars.length] = new Car(brand, model);
    }
    modelsPerBrand(brand) {
        return this.cars
            .filter(car => car.brand.toLowerCase().startsWith(brand.toLowerCase()))
            .map(model => model.model);
    
        // for (let i = 0; i < this.cars.length; i++) {
        //     if (this.cars[i].brand === brand) {
        //         models[models.length] = this.cars[i];
        //     }
        // }
        // return models;
    }
}

let myGarage = new Garage("My Garage");
myGarage.addCar("Toyota", "Corolla");
myGarage.addCar("Honda", "Civic");
myGarage.addCar("Ford", "Focus");
myGarage.addCar("Toyota", "Yaris");
myGarage.addCar("Fiat", "500");
myGarage.addCar("Honda", "Accord");
myGarage.addCar("Ford", "Mustang");
myGarage.addCar("Fiat", "Punto");
myGarage.addCar("Fiat", "Panda");


console.log(myGarage.modelsPerBrand("Honda").toString());
console.log(myGarage.modelsPerBrand("Ford").toString());
console.log(myGarage.modelsPerBrand("Fiat").toString());
// for (let car of myGarage.modelsPerBrand("Toyota")) { console.log(car.toString());}
// for (let car of myGarage.modelsPerBrand("Honda")) { console.log(car.toString());}
// for (let car of myGarage.modelsPerBrand("Ford")) { console.log(car.toString());}
// for (let car of myGarage.modelsPerBrand("Fiat")) { console.log(car.toString());}

let unsortedNumArray = [34, 7, 23, 32, 5, 62];
unsortedNumArray.sort((a, b) => a - b);
console.log(unsortedNumArray);
unsortedNumArray.sort((a, b) => b - a);
console.log(unsortedNumArray);



class User {
    static nextId=1;

    constructor(nome, cognome, età){
        this.id = User.nextId;
        User.increaseNextId();
        this.nome = nome;
        this.cognome = cognome;
        this.età = età;
    }
    saluta(){
        console.log("Ciao, sono " + this.nome + " " + this.cognome);
    }

    static increaseNextId(){
        User.nextId++;
    }
}

class Post {
    constructor(titolo, contenuto, autore) {
        this.titolo = titolo;
        this.contenuto = contenuto;
        this.autore = autore;
        this.likes = [];

    }
    increaseLike(utente) {
            this.likes[this.likes.length] = utente;
        };
    numberOfLikes() {
            return this.likes.length;
        }
}

let eric = new User("Eric", "Cartman", 10);
let kenny = new User("Kenny", "McCormick", 9);
let stan = new User("Stan", "Marsh", 10);
// console.log(eric);
// console.log(kenny);
// console.log(stan);
let post1 = new Post("Primo post", "Questo è il contenuto del primo post", eric);
// console.log(post1);
post1.increaseLike(kenny);
post1.increaseLike(stan);
post1.increaseLike(eric);
console.log("Likes dopo incremento: " + post1.numberOfLikes());
// console.log(post1);

let posts = [
    new Post("Secondo post", "Questo è il contenuto del secondo post", kenny),
    new Post("Terzo post", "Questo è il contenuto del terzo post", stan),
    new Post("Quarto post", "Questo è il contenuto del quarto post", eric)
];
posts.unshift(post1);

// console.log(posts);
posts[0].increaseLike(eric);
posts[0].increaseLike(stan);
posts[1].increaseLike(kenny);
posts[2].increaseLike(eric);
posts[2].increaseLike(kenny);
posts[2].increaseLike(stan);

posts.forEach(function(post){
    console.log("post.numberOfLikes(): " + post.numberOfLikes());
});

posts.sort(function(a, b){
    return b.numberOfLikes() - a.numberOfLikes();
});

console.log("Dopo ordinamento:");   
posts.forEach(function(post){
    console.log("post.numberOfLikes(): " + post.numberOfLikes());
});

let double = x=>2*x;
console.log(double(5));
console.log((x=>2*x)(5));
*/
/*
console.log(this);
let eric = {
    nome: "Eric",
    cognome: "Cartman",
    età: 10,
    saluta: function(){
        console.log(this);
        let getSpace = () => {console.log(this); return" ";}
        let getSpace1 = function(){console.log(this); return" ";}
        console.log("Ciao, sono " + this.nome + getSpace() + getSpace1() + this.cognome);
    }
};

eric.saluta();

*/
/*
let array = [3,5,7,9,11];

function forEach(arr, callback){
    for(let i=0; i < arr.length; i++){
        callback(arr[i], i);
    }
}

forEach(array, (element, index) => console.log("Elemento in posizione " + index + ": " + element));

function map(arr, callback){
    let result = [];
    for(let i=0; i < arr.length; i++){
        result[i] = callback(arr[i]);
    }
    return result;
}

console.log(map(array, element =>  element * 2));

function filter(arr, callback){
    let result = [];
    for(let i=0; i < arr.length; i++){
        if(callback(arr[i])){
            result[result.length] = arr[i];
        }
    }
    return result;
}

console.log(filter(array, element => element > 6));

function find(arr, callback){
    for(let i=0; i < arr.length; i++){
        if(callback(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}

console.log(find(array, element => element === 6));
console.log(find(array, element => element === 7));

function findIndex(arr, callback){
    for(let i=0; i < arr.length; i++){
        if(callback(arr[i])){
            return i;
        }
    }
    return -1;
}

console.log(findIndex(array, element => element === 6));
console.log(findIndex(array, element => element === 7));
*/
/*
let scadenza = new Date(2025, 10, 15); // 15 novembre 2025

console.log( 
    new Date().getTime() >= scadenza.getTime() ? 
        "La data di scadenza è passata." : 
        "La data di scadenza non è ancora passata." 
    );

// let oggi = new Date(); // data odierna

// console.log("Data di scadenza: " + scadenza);
// console.log("Data odierna: " + oggi);
// if (oggi > scadenza) {
//     console.log("La data di scadenza è passata.");
// } else {
//     console.log("La data di scadenza non è ancora passata.");
// }

let acquistionDate = new Date(2025, 10, 15); // 15 novembre 2025
let warrantyDaysPeriod = 15; // garanzia di 15 giorni

console.log( 
    new Date().getTime() >= new Date(acquistionDate).setDate(acquistionDate.getDate() + warrantyDaysPeriod) ? 
        "La garanzia è scaduta." : 
        "La garanzia è ancora valida." 
    );
let warrantyExpirationDate = new Date(acquistionDate).setDate(acquistionDate.getDate() + warrantyDaysPeriod);

// console.log("Data di acquisto: " + acquistionDate);
console.log("Data di scadenza della garanzia: " + warrantyExpirationDate);
// if (oggi > warrantyExpirationDate) {
//     console.log("La garanzia è scaduta.");
// } else {
//     console.log("La garanzia è ancora valida.");
// }
*/
/*
class notValidError extends Error {
    constructor(message = "Valore non valido") {
        super(message);
        this.name = "notValidError";
    }
}

class Account {
    constructor(IBAN, balance) {
        this.IBAN = IBAN;
        this.balance = balance;
    }

    leggiSaldo() {
        return this.balance;
    }
    versa(amount) {
        this.balance += amount;
    }
    preleva(amount) {
        if (amount <= 0)
            throw new notValidError("L'importo da prelevare deve essere positivo.");
        if (this.balance < amount) {
            throw new notValidError("Fondi insufficienti per il prelievo di " + amount + " dall'account " + this.IBAN + ".");
        }
        this.balance -= amount;
    }

    static transfer(from, to, amount) {
        from.preleva(amount);
        to.versa(amount);      
    }
}

let Manuela = new Account("IT1234567890", 10000);
let Marco = new Account("IT0987654321", 5000);
console.log(Manuela);
console.log(Marco);
try{
    Account.transfer(Manuela, Marco, 1000);
    console.log("Trasferimento di 1000 da " + Manuela.IBAN + " a " + Marco.IBAN + " effettuato con successo.");   
} catch (error){
    console.log(error.message);
}
console.log(Manuela);
console.log(Marco);
try{
    Account.transfer(Marco, Manuela, 7000);
    console.log("Trasferimento di 7000 da " + Marco.IBAN + " a " + Manuela.IBAN + " effettuato con successo.");   
} catch (error){
    if (error instanceof notValidError){
        console.log(error.message);
    } else {
        console.log(error.message);
    }

}
console.log(Manuela);
console.log(Marco);
try{
    Account.transfer(Marco, Manuela, -1000);
    console.log("Trasferimento di -1000 da " + Marco.IBAN + " a " + Manuela.IBAN + " effettuato con successo.");   
} catch (error){
    console.log(error.message);
}
console.log(Manuela);
console.log(Marco);
*/
// const timer = setTimeout(() => {
//     console.log("Esecuzione ritardata di 2 secondi");
// }, 2000);

// console.log("Esecuzione immediata");


// const interval = setInterval(() => {
//     Manuela.versa(100);
// }, 1000);

// setTimeout(() => {
//     console.log(Manuela);
// }, 2000);

// setTimeout(() => {
//     console.log(Manuela);
// }, 20000);

// setInterval(() => {
// location.replace("https://www.google.it");
// }, 1000);
// history.back();
// history.back();
// console.log(document.getElementById('accauno'));
// console.log(document.getElementById('pagarafo'));

// let h1 = document.querySelectorAll('.accauno');
// console.log(h1);
/*
const menuBtn = document.getElementById('menuBtn');
const div = menuBtn.parentElement;
const body = div.parentElement;

menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('paragrafo cliccato', event);
});

div.addEventListener('click', (event) => {
    console.log('div cliccato', event);
});

body.addEventListener('click', (event) => {
    console.log('body cliccato', event);
});

let barra = document.getElementById('barra');

// let menuBtn = document.getElementById('menuBtn');
// menuBtn.addEventListener('click', () => {
//     alert("Hai cliccato il bottone!");
// });
*/
/*
setInterval(() => {
    barra.classList.toggle('evidenziato');
}, 500);

const postDto = [
    {
        id: 0,
        src:"https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Welcome to Facebook",
        content:"Connect with friends and the world around you on Facebook.",
        likes: [0],
        authorId: 4,
        createdAt: (new Date(2023, 4, 1, 9, 30)).getTime()
    },
    {
        id: 1,
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVfHORQFLyUf_rNove-xUmxIskDeMJ63REz_YIMQ6S0vCyQdkBvJos4igKspvCgpqnpy8h0xM--1uckzZIxDgyoHy37-MowkF-YzvVx8&s=10",
        title:"Gatto in vendita",
        content:"Miagola da scassare le orecchie.",
        likes: [],
        authorId: 5,
        createdAt: (new Date(2023, 4, 1, 12, 25)).getTime()
    },
    {
        id: 2,
        src:"https://magazine.arcaplanet.it/wp-content/uploads/2023/02/razza-gatto-european-shorthair.jpg",
        title:"Gatta dolce",
        content:"Dolce come il miele.",
        likes: [0, 6],
        authorId: 5,
        createdAt: (new Date(2023, 4, 1, 12, 30)).getTime()
    },
    {
        id: 3,
        src:"https://www.infomotori.com/content/uploads/2024/08/Bugatti-W16-Mistral.jpg",
        title:"Vendo auto sportiva",
        content:"Boh, credo Panda truccata.",
        likes: [0, 2, 5, 6],
        authorId: 1,
        createdAt: (new Date(2023, 4, 2, 9, 30)).getTime()
    },
    {
        id: 4,
        src:"https://www.sicurmoto.it/wp-content/uploads/2025/01/Panigale-V2-2025.jpg",
        title:"Motorino per neopatentati",
        content:"Facile da guidare e economico da mantenere.",
        likes: [5],
        authorId: 4,
        createdAt: (new Date(2023, 4, 2, 9, 35)).getTime()
    },
    {
        id: 5,
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/CrossBild_Jonas_Edberg_H%C3%B6kens%C3%A5s.jpg/1200px-CrossBild_Jonas_Edberg_H%C3%B6kens%C3%A5s.jpg",
        title:"Corso motocross",
        content:"Livello baby.",
        likes: [5],
        authorId: 3,
        createdAt: (new Date(2023, 4, 2, 9, 37)).getTime()
    },
    {
        id: 6,
        src:"https://www.liveinup.it/blog/wp-content/uploads/2022/11/simone-moro-helicopter-yellow-1024x682-1-1024x682.jpg",
        title:"Ventilatore",
        content:"Vendo ventilatore per quando fa caldo.",
        likes: [3, 5],
        authorId: 6,
        createdAt: (new Date(2023, 4, 2, 9, 45)).getTime()
    },    
    {
        id: 7,
        src:"https://i.ytimg.com/vi/wf9Xq55WKNs/maxresdefault.jpg",
        title:"Barchino da pesca",
        content:"Vendo per passaggio a modello più grande.",
        likes: [],
        authorId: 0,
        createdAt: (new Date(2024, 2, 29, 15, 0)).getTime()
    },    
    {
        id: 8,
        src:"https://upload.wikimedia.org/wikipedia/commons/b/b0/Airbus_A300-600ST_Beluga_F-GSTB_%2841346659120%29.jpg",
        title:"Aereo brutto",
        content:"Vendo perché non mi sta sulla mensola.",
        likes: [],
        authorId: 7,
        createdAt: (new Date(2023, 4, 5, 17, 45)).getTime()
    },
    {
        id: 9,
        title:"Robot",
        content: "Il mio robotino ed io al mare",
        src: "https://www.southpark.it/immagini/episodi/stagione8/2/originali/3.jpg",
        likes: [0],
        authorId: 4,
        createdAt: (new Date(2023, 4, 1, 9, 30)).getTime()
    },
    {
        id: 10,
        title:"Dazi",
        content: "Dazi a te, a te e pure a te",
        src: "https://www.hallofseries.com/wp-content/uploads/2016/11/2-1.jpg",
        likes: [],
        authorId: 5,
        createdAt: (new Date(2023, 4, 1, 12, 25)).getTime()
    },
    {
        id: 11,
        title:"Carte",
        content: "Non hai le carte!",
        src: "https://i.guim.co.uk/img/media/323c85fb489c1c7d57d366f0b0053679a2c6c5df/107_0_718_431/master/718.png?width=465&quality=85&dpr=1&s=none",
        likes: [0, 6],
        authorId: 5,
        createdAt: (new Date(2023, 4, 1, 12, 30)).getTime()
    },
    {
        id: 12,
        title:"Kenny",
        content: "Hanno ucciso Kenny",
        src: "https://img.wattpad.com/53c23b2e2500c7a4cec8b2edf7b2ff5d41ecbb46/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f71702d4772696449494e375669673d3d2d3330333637353430362e313436663161646562346365356337393236313238333234373134352e676966",
        likes: [0, 2, 5, 6],
        authorId: 1,
        createdAt: (new Date(2023, 4, 2, 9, 30)).getTime()
    },
    {
        id: 13,
        title:"Droga",
        content: "Nuovo stupefacente dilaga tra i giovani",
        src: "https://i.pinimg.com/736x/38/10/5a/38105a419f08bd0dca9a848f80e4297d.jpg",
        likes: [5],
        authorId: 4,
        createdAt: (new Date(2023, 4, 2, 9, 35)).getTime()
    },
    {
        id: 14,
        title:"Conferenza",
        content: "Conferenza in allegria",
        src: "https://www.southpark.it/immagini/episodi/stagione13/9/originali/3.jpg",
        likes: [5],
        authorId: 3,
        createdAt: (new Date(2023, 4, 2, 9, 37)).getTime()
    },
    {
        id: 15,
        title:"Crime",
        content: "Il crimine dilaga in città",
        src: "https://www.southpark.it/immagini/episodi/stagione13/9/originali/2.jpg",
        likes: [3, 5],
        authorId: 6,
        createdAt: (new Date(2023, 4, 2, 9, 45)).getTime()
    },
    {
        id: 16,
        title:"Gold",
        content: "Compro Oro",
        src: "https://tv-fanatic-res.cloudinary.com/iu/s--8QSCTKhB--/t_full/cs_srgb,d_tv-fanatic-placeholder-square.png,f_auto,fl_strip_profile.lossy,q_auto:420/v1371228190/buy-from-cartman.png",
        likes: [],
        authorId: 0,
        createdAt: (new Date(2024, 2, 29, 15, 0)).getTime()
    },
    {
        id: 17,
        title:"Uomogatto",
        content: "C'era una volta su... italia 1",
        src: "https://www.pazzidifanta.com/wp-content/uploads/2022/12/uomo_gatto_screen-3-1250x782.jpg",
        likes: [],
        authorId: 7,
        createdAt: (new Date(2023, 4, 5, 17, 45)).getTime()
    }
]

class User {
    static nextId=1;

    constructor(nome, cognome, età){
        this.id = User.nextId;
        User.increaseNextId();
        this.nome = nome;
        this.cognome = cognome;
        this.età = età;
    }
    saluta(){
        console.log("Ciao, sono " + this.nome + " " + this.cognome);
    }

    static increaseNextId(){
        User.nextId++;
    }
}
let users = 
[
    new User("Eric", "Cartman", 10),
    new User("Kenny", "McCormick", 9),
    new User("Stan", "Marsh", 10),
    new User("Pino", "Pinucci", 12),
    new User("Ciuccio", "DeCiuccis", 8),
    new User("Ciccio", "Pasticcio", 12),
    new User("Coso", "Maffo", 8),
    new User("Altro", "Cane", 72)
]

let main = document.getElementById('postsContainers');
postDto.forEach(post => {
    let postContainer = document.createElement('div');
    postContainer.classList.add('container');
    main.appendChild(postContainer);

        let img = document.createElement('img');
        img.src = post.src;
        postContainer.appendChild(img);

        let contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        postContainer.appendChild(contentDiv);

            let title = document.createElement('h2');
            title.innerText = post.title;
            contentDiv.appendChild(title);

            let content = document.createElement('p');
            content.innerText = post.content;
            contentDiv.appendChild(content);

        let detailDiv = document.createElement('div');
        detailDiv.classList.add('info');
        postContainer.appendChild(detailDiv);
            
            let likes = document.createElement('div');
            likes.innerText = post.likes.length + " Likes";
            detailDiv.appendChild(likes);

            let author = document.createElement('div');
            author.innerText = users[post.authorId].nome + " " + users[post.authorId].cognome;
            detailDiv.appendChild(author);

            let createdAt = document.createElement('div');
            createdAt.innerText = new Date(post.createdAt).toLocaleString();
            detailDiv.appendChild(createdAt);
});
*/

// function sum(num1, num2){
//     console.log( num1+num2);
// }
// function duble(num){
//     console.log("ok");
//     window.setInterval(()=>sum(num, num), 1000);
// }

// function ok(num){return num;};
// function no(){return 'w';};

// function dubleAsync(num, resolve, reject){
//     if (num > 0)
//         resolve(duble(num));
//     else 
//         reject();
// }


// let a = 5;
// let b = 3;
// // dubleAsync(a, ok, no);

//     window.setInterval( ()=>duble(a), 5000);

// let promessa = new Promise (function (resolve, reject){
//     if (true)
//         resolve();
//     else 
//         reject(new Error('no'));

// })

// promise.then(function(result){console.log("ok", )})

// async function loadPosts(){

class User {
    static nextId=1;

    constructor(nome, cognome, età){
        this.id = User.nextId;
        User.increaseNextId();
        this.nome = nome;
        this.cognome = cognome;
        this.età = età;
    }
    saluta(){
        console.log("Ciao, sono " + this.nome + " " + this.cognome);
    }

    static increaseNextId(){
        User.nextId++;
    }
}
let users = 
[
    new User("Eric", "Cartman", 10),
    new User("Kenny", "McCormick", 9),
    new User("Stan", "Marsh", 10),
    new User("Pino", "Pinucci", 12),
    new User("Ciuccio", "DeCiuccis", 8),
    new User("Ciccio", "Pasticcio", 12),
    new User("Coso", "Maffo", 8),
    new User("Altro", "Cane", 72)
]
async function loadPosts() {
    let response = await fetch('https://asocial.cyberdelia.eu/api/v1/post');
    let postsDto = await response.json();
    let main = document.getElementById('postsContainers');

    postsDto.forEach(post => {
        let postContainer = document.createElement('div');
        postContainer.classList.add('container');
        main.appendChild(postContainer);

            let img = document.createElement('img');
            img.src = post.imgSrc;
            postContainer.appendChild(img);

            let contentDiv = document.createElement('div');
            contentDiv.classList.add('content');
            postContainer.appendChild(contentDiv);

                let content = document.createElement('p');
                content.innerText = post.content;
                contentDiv.appendChild(content);

            let detailDiv = document.createElement('div');
            detailDiv.classList.add('info');
            postContainer.appendChild(detailDiv);
                
                let likes = document.createElement('div');
                likes.innerText = post.likes.length + " Likes";
                detailDiv.appendChild(likes);

                let author = document.createElement('div');
                author.innerText = users[post.authorId].nome + " " + users[post.authorId].cognome;
                detailDiv.appendChild(author);

                let createdAt = document.createElement('div');
                createdAt.innerText = new Date(post.createdAt).toLocaleString();
                detailDiv.appendChild(createdAt);
});};

// let array=dati.then(function( response){
// return response.json();
// });
loadPosts();
