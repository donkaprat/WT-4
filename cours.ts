// langage typé mais facultatif
// ; obligatoires en fin d'instruction
let n : number = 1;	
let b : boolean = false;
let str : string = "abc";
const PI : number = 3.14;

console.log(n);
console.log(PI);

// on essaie de modifier une constance => plante
// PI = PI *2;

console.log(1+2+str);
console.log(str+1+2);

// opérateurs math : + / * % - =
// opérateurs logiques : & && | || == === != !== < > <= >=
// ET logique : shorcut && et le normale & => && si la première condition est fausse, on n'exécute pas la deuxième et & on exécute toujours les deux conditions 
// IDEM pour le OU logique


// tableau
let tab : number[] =[];
let tabs : Array<string> = new Array();
tab = [1,2,3,4,5,6];
// ATTENTION TS/JS NE RESPECTE PAS LES CONVENTIONS DE NOMMAGE
for(let i in tab){
	console.log("indice "+i);
}
for(let i of tab){
	console.log("valeur "+i);
}
// Warning : utiliser avec parcimonie les méthodes sur les Array : cf benchmark
// tableau uniquement en lecture
let readOnlyArray: ReadonlyArray<number> = tab;
// readOnlyArray.push(123); 	// ça compile pas


// JS on peut faire un tab avec plusieurs
let aListWithDifferentTypes: (number | string)[] = [1, 'Hello']; // propre
// Union | = number ou string comme type
// any n'importe quel type, par contre le any affecte un type à la varaible et le garde en mémoire
let tabCrade : Array<any> = []; 	// beurk

// destruction : inverser la valeur de mes variables
let a = 1;
let c = 2;
[a,c] = [c,a];
let [first, second, ...rest] = tab;
// as : cast
let t = rest as Array<number | string>;
console.log("first : "+first);
console.log("second : "+second);
console.log("rest : "+rest);
console.log("type rest : " + typeof(rest));
console.log("type rest : " + typeof rest);
console.log("t : "+t);
console.log("type de t : "+typeof(t));

// tuple = couple de clé-valeur
// dictionnaire = tableau de tuples
let aTuple: [number, string] = [1, 'Hello'];
let aListOfTuples: Array<[number, string]> = [[1, 'Hello'], [2, 'World']];
let numberInTuple: number = aTuple[0];
let stringInTuple: string = aTuple[1];

// Enumeration 
enum Color { Red, Green, Blue };
let anEnum: Color = Color.Green;
console.log(anEnum);
anEnum = 2;		// indice de la valeur cherchée
console.log(anEnum);
// 0b binaire 0x hexa o octal
enum Color2 { Red = 0b001, Green = 0b010, Blue = 0b100 };
let enumName: string = Color2[2];
console.log(enumName);
console.log(Color2.Green);
enum AccessMode { 
    Read = 0b01, 
    Write = Read << 1,          
    ReadWrite = Read | Write   
};
console.log(AccessMode[3]);

let dummy: void = undefined;
dummy = null;

// type nullable, param facultatif : ?
function log(message?: string): void { console.log(message || 'empty'); };
log();
log('zozo');

// never : JAMAIS
function veryFriendly(): never { while (true) { console.log('Hello!'); } };
function notImplemented(): never { throw new Error('Not yet imlemented.'); };
//function doesNotWork(): never { return 42.0; }; // ça crash


// Function types
let aFunc: (x: number, y: number) => number;
aFunc = (a, b) => a * b;

// Type aliases
type NullableStringArray = Array<string | null>;
// type NullableStringArray2 = Array<string?>;	// crash
let anArray: NullableStringArray = [];
anArray.push('Foo Bar');
anArray.push(null);

// fonctions
function add(op1 : number, op2 : number) : number{
	return op1 + op2;
}
console.log(add(3,6));
// le retour est implicite s'il n'y a qune instruction
// si j'ai un bloc d'instructions ({}) je dois dire explicitement le return
let addArrow = (op1 : number, op2 : number) => op1 +op2;
console.log(addArrow(3,6));


// Classe : permet de regrouper des variables entre elles avec les fonctions qui utilisent ces variables
interface Vehicule{
	nb_roues : number;
	foo : () => string;	
}
class Voiture implements Vehicule{
	marque : string;
	couleur : string;
	puissance : number;
	nb_roues : number;
	// pour créer une variable de type Voiture, un objet, on passe par le constructeur
	constructor(marque : string, couleur : string, puissance : number, nbroues : number){
		// this indique que c'est la variable de la classe
		this.marque = marque;
		this.couleur = couleur;
		this.puissance = puissance;
		this.nb_roues = nbroues;
	}
	affiche(){
		console.log("La marque " + this.marque + " - " + this.puissance + " CV");
	}
	foo(){
		return 'Vehicule : Voiture';
	}
}
// public, private, protected, par défaut : public
// static (référence à la classe et pas à l'objet)
let cocci : Voiture = new Voiture('VW','verte',4,4);
console.log(cocci.marque);
cocci.affiche();
// objet à la volée
//let ds : Voiture = {marque : "Citroen", couleur: "noir", puissance : 5, affiche : () => "La marque " + this.marque + " - " + this.puissance + " CV"};	// crade
//console.log(ds.affiche());
console.log(cocci.foo());
