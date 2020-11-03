// tsc -t es6 
function doAsyncTask(cb) {
    setTimeout(() => {
        console.log("Async Task Calling Callback");
        cb();
    }, 1000);
}
// souci: on attends forcément une seconde
doAsyncTask(() => console.log("Callback Called"));
console.log("go");
// sans attente forcée, mais juste le temps de la faire la tâche
let prom = new Promise(function (resolve, reject) {
    resolve('Bravo');
});
prom.then((value) => console.log(value)).catch((err) => console.log(err));
prom.then((value) => console.log("2" + value)).catch((err) => console.log(err));
console.log("go2");
function pair(x) {
    return new Promise((resolve, reject) => {
        if (x % 2 == 0) {
            resolve('pair');
        }
        else {
            reject('pb');
        }
    });
}
pair(3).then((value) => console.log(value)).catch((err) => console.log(err));
