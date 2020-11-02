// init du tableau du benchmark, le sujet du test
let tab : Array<number> = [];
for(let i : number = 0 ; i < 10000; i++){
	tab.push(i);
}

console.log("Un simple parcours");
let deb : number = 		Date.now();
for(let i : number = 0; i < 10000; i++){
	console.log(tab[i]);
}
let fin : number = 	Date.now();

let debi : number = 	Date.now();
for(let i in tab){	// indice
	console.log(tab[i]);
}
let fini : number = 	Date.now();

let debo : number = 	Date.now();
for(let i of tab){	// valeur
	console.log(i);
}
let fino : number = 	Date.now();

let debe : number = 	Date.now();
tab.forEach(e => console.log(e));	// une fonction lambda, arrow en paramètre
let fine : number = 	Date.now();

console.log("Boucle for(;;) \t" + (fin-deb));
console.log("Boucle for in \t" + (fini-debi));
console.log("Boucle for of \t" + (fino-debo));
console.log("Méthode forEach \t" + (fine-debe));

console.log("Un simple filtre");
 deb = Date.now();
for(let i : number = 0; i < 10000; i++){
	if(tab[i] % 2 == 0){
		console.log(tab[i]);
	}
}
fin = 	Date.now();

debi  =  	Date.now();
for(let i in tab){	// indice
	if(tab[i] % 2 == 0){
		console.log(tab[i]);
	}
}
fini  = 	Date.now();

 debo  = 	Date.now();
for(let i of tab){	// valeur
	if(tab[i] % 2 == 0){
		console.log(i);
	}
}
fino = 	Date.now();

debe = 	Date.now();
tab.forEach(e => e % 2 == 0 ? console.log(e) : "");	
fine = Date.now(); 

let debf : number = 	Date.now();
tab.filter(e => e % 2 == 0).forEach(e => console.log(e));
let finf : number = Date.now();

console.log("Boucle for(;;) \t" + (fin-deb));
console.log("Boucle for in \t" + (fini-debi));
console.log("Boucle for of \t" + (fino-debo));
console.log("Méthode forEach \t" + (fine-debe));
console.log("Méthode filter \t" + (finf-debf));