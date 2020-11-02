let note : Array<number> = [12,20,19,15,4];
let avg : number = 0;
// methode 1
for(let i of note){
	avg += i;
}
avg /= note.length;
console.log("Moyenne "+avg);

// methode 2 : reduce tab => élément du tableau
avg = note.reduce((e, a) => a+=e) /note.length;
console.log("Moyenne "+avg);

// min
let min : number = note[0];
for(let i of note){
	min = min > i ? i : min;
}

let noteSur10 : Array<number> = [];
for(let i of note){
	noteSur10.push(i / 2);
}
console.log(noteSur10);

noteSur10 = note.map(e => e/2);
console.log(noteSur10);

// slicing : indices négatifs en compte

let toto ={
              nom           : "Bob",
              prénom        : "Kelso",
              dateNaissance : new Date(1960, 8, 17),
              nomComplet    : function() {
                   return `${this.nom} ${this.prénom}, né le ${this.dateNaissance}`
              }
};
console.log(toto.nomComplet());

class Personne {
              nom           : string;
              prénom        : string;
              dateNaissance : Date;
              nomComplet() {
                   return `${this.nom} ${this.prénom}, né le ${this.dateNaissance}`;
              }
				constructor(nom: string, prénom: string, dn: Date) { 
					this.nom = nom;
					this.prénom = prénom;
					this.dateNaissance = dn;
				}
}
let titi = new Personne("Bob", "Kelso", new Date(1960, 8, 17) );
console.log(titi.nomComplet());

interface Surface2D {
	Aire : () => number; 
	Périmètre: () => number;
}
class Rectangle implements Surface2D {
    largeur : number;
	hauteur : number;
	constructor(L: number, H:number) {this.largeur=L; this.hauteur=H;}
	Aire(){return this.largeur*this.hauteur}
	Périmètre(){return 2*(this.largeur+this.hauteur)}
}
let surface : Surface2D = new Rectangle(1,2);
class Carre extends Rectangle {
	constructor (côté: number) {super(côté, côté)}
}

interface maStructureDeDonnées {
	x : number;
	y : number;
	rayon? : number; 
}
let donnée_1 : maStructureDeDonnées = {x: 32, y: 64};
let donnée_2 : maStructureDeDonnées = {x: 16, y: 96, rayon: 128};

enum Color { Red, Green, Blue };
let myColor: number = Color.Green; 
console.log('myColor = ' + myColor);
let myColor2: string = Color[0];
console.log('myColor2 = ' + myColor2);

let list1: number[] = [1, 2, 3];
console.log('list1 array = ' + list1);
let list2: Array<number> = list1;
console.log('list2 array = ' + list2);
list1.push(4);
console.log('list2 array = ' + list2);
list2 = [];
list2 = list1.map(e => e); // si le tableau est trop grand => for of avec push à la place
list1.push(5);
console.log('list2 array = ' + list2);
let list3 : Array<number | boolean | string> = [1,true,"string"];
console.log(list3);

let myUnionNumber: number | number[];
myUnionNumber = 100;
if (typeof myUnionNumber === 'number') {
    console.log('myUnionNumber is a number');
}
else {
    console.log('myUnionNumber is now an object');
}
myUnionNumber = [100, 200, 300];
if (typeof myUnionNumber === 'object') {
    console.log('myUnionNumber is now an object');
}
else {
    console.log('myUnionNumber is a number');
}
let myVarType: string = typeof myUnionNumber;
switch (myVarType) {
    case 'number':
        {
            console.log('myUnionNumber is a number');

            break;
        }
    case 'object':
        {
            console.log('myUnionNumber is now an object');
            break;
        }
}

function add(a: number, b: number): number {
        return a + b;
}
console.log('named function');
console.log('5 + 2 = ' + add(5, 2));
let add2 = function (a: number, b: number): number {
        return a + b;
}
console.log('anonymous function');
console.log('5 + 5 = ' + add2(5, 5));
let add3 = (a: number, b: number): number => {
        return a + b;
}
console.log('arrow function');
console.log('10 + 5 = ' + add3(10, 5));

interface pet {
        name: string;
        age: number;
        weight: number;
    }
var myPets: pet[] = [
        { name: 'Sally', age: 18, weight: 85 },
        { name: 'Jasmine', age: 9, weight: 55 },
        { name: 'Rush', age: 15, weight: 45 },
        { name: 'Roxie', age: 6, weight: 85 }
    ];
var compareAge = function (a: pet, b: pet) {
        if (a.age < b.age) { return -1; }
        if (a.age > b.age) {return 1; }
        return 0;
}
console.log(myPets.sort(compareAge));
