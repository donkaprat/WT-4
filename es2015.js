function printSquareWithMistake(sideLength) {
    for (var i = 0; i < sideLength; i++) {
        var line = 'dummy';
        var line = '';
        for (var i = 0; i < sideLength; i++) {
            line += '*';
        }
        console.log(line);
    }
}
printSquareWithMistake(3);
console.log();
function printSquare(sideLength) {
    for (let i = 0; i < sideLength; i++) {
        let line = '';
        //let line = 'dummy';
        for (let i = 0; i < sideLength; i++) {
            line += '*';
        }
        console.log(line);
    }
}
printSquare(3);
function getGreetingFactory(firstName) {
    let greeting = `Hello ${firstName} (${Date.now()})`;
    return () => greeting; // Note capturing of 'greeting' here.
}
const greeter = getGreetingFactory('John');
console.log(greeter());
setTimeout(() => console.log(greeter()), 10);
setTimeout(() => console.log(getGreetingFactory('John')()), 10);
function veryFriendlyGreeter(firstName) {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(`${i + 1}: Hello ${firstName}!`), 50);
    }
    for (let j = 0; j < 3; j++) {
        // Note correct capturing of 'j' because of 'let'.
        setTimeout(() => console.log(`${j + 1}: Hello ${firstName}!`), 50);
    }
}
veryFriendlyGreeter('John');
