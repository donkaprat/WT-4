export class Greeter {
    static greet() {
        window.document.body.innerHTML += "Hello World!"; 
    }
}

// tsc -t es2015 --module system main.ts
// ES6 possible

// troisième possible : donner la config à tsc
/*
on crée un fichier tsconfig.json
{
    "compilerOptions": {
        "module": "system",
        "target": "es2015"
    }
}
*/