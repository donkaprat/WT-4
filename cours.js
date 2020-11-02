var _a;
// langage typé mais facultatif
// ; obligatoires en fin d'instruction
var n = 1;
var b = false;
var str = "abc";
var PI = 3.14;
console.log(n);
console.log(PI);
// on essaie de modifier une constance => plante
// PI = PI *2;
console.log(1 + 2 + str);
console.log(str + 1 + 2);
// opérateurs math : + / * % - =
// opérateurs logiques : & && | || == === != !== < > <= >=
// ET logique : shorcut && et le normale & => && si la première condition est fausse, on n'exécute pas la deuxième et & on exécute toujours les deux conditions 
// IDEM pour le OU logique
// tableau
var tab = [];
var tabs = new Array();
tab = [1, 2, 3, 4, 5, 6];
// ATTENTION TS/JS NE RESPECTE PAS LES CONVENTIONS DE NOMMAGE
for (var i in tab) {
    console.log("indice " + i);
}
for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
    var i = tab_1[_i];
    console.log("valeur " + i);
}
// Warning : utiliser avec parcimonie les méthodes sur les Array : cf benchmark
// tableau uniquement en lecture
var readOnlyArray = tab;
// readOnlyArray.push(123); 	// ça compile pas
// JS on peut faire un tab avec plusieurs
var aListWithDifferentTypes = [1, 'Hello']; // propre
// Union | = number ou string comme type
// any n'importe quel type, par contre le any affecte un type à la varaible et le garde en mémoire
var tabCrade = []; // beurk
// destruction : inverser la valeur de mes variables
var a = 1;
var c = 2;
_a = [c, a], a = _a[0], c = _a[1];
var first = tab[0], second = tab[1], rest = tab.slice(2);
// as : cast
var t = rest;
console.log("first : " + first);
console.log("second : " + second);
console.log("rest : " + rest);
console.log("type rest : " + typeof (rest));
console.log("type rest : " + typeof rest);
console.log("t : " + t);
console.log("type de t : " + typeof (t));
// tuple = couple de clé-valeur
// dictionnaire = tableau de tuples
var aTuple = [1, 'Hello'];
var aListOfTuples = [[1, 'Hello'], [2, 'World']];
var numberInTuple = aTuple[0];
var stringInTuple = aTuple[1];
// Enumeration 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var anEnum = Color.Green;
console.log(anEnum);
anEnum = 2; // indice de la valeur cherchée
console.log(anEnum);
// 0b binaire 0x hexa o octal
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
;
var enumName = Color2[2];
console.log(enumName);
console.log(Color2.Green);
var AccessMode;
(function (AccessMode) {
    AccessMode[AccessMode["Read"] = 1] = "Read";
    AccessMode[AccessMode["Write"] = 2] = "Write";
    AccessMode[AccessMode["ReadWrite"] = 3] = "ReadWrite";
})(AccessMode || (AccessMode = {}));
;
console.log(AccessMode[3]);
var dummy = undefined;
dummy = null;
// type nullable, param facultatif : ?
function log(message) { console.log(message || 'empty'); }
;
log();
log('zozo');
// never : JAMAIS
function veryFriendly() { while (true) {
    console.log('Hello!');
} }
;
function notImplemented() { throw new Error('Not yet imlemented.'); }
;
//function doesNotWork(): never { return 42.0; }; // ça crash
// Function types
var aFunc;
aFunc = function (a, b) { return a * b; };
// type NullableStringArray2 = Array<string?>;	// crash
var anArray = [];
anArray.push('Foo Bar');
anArray.push(null);
// fonctions
function add(op1, op2) {
    return op1 + op2;
}
console.log(add(3, 6));
// le retour est implicite s'il n'y a qune instruction
// si j'ai un bloc d'instructions ({}) je dois dire explicitement le return
var addArrow = function (op1, op2) { return op1 + op2; };
console.log(addArrow(3, 6));
