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
    for (var i = 0; i < sideLength; i++) {
        var line = '';
        //let line = 'dummy';
        for (var i_1 = 0; i_1 < sideLength; i_1++) {
            line += '*';
        }
        console.log(line);
    }
}
printSquare(3);
function getGreetingFactory(firstName) {
    var greeting = "Hello " + firstName + " (" + Date.now() + ")";
    return function () { return greeting; }; // Note capturing of 'greeting' here.
}
var greeter = getGreetingFactory('John');
console.log(greeter());
setTimeout(function () { return console.log(greeter()); }, 10);
setTimeout(function () { return console.log(getGreetingFactory('John')()); }, 10);
function veryFriendlyGreeter(firstName) {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () { return console.log(i + 1 + ": Hello " + firstName + "!"); }, 50);
    }
    var _loop_1 = function (j) {
        // Note correct capturing of 'j' because of 'let'.
        setTimeout(function () { return console.log(j + 1 + ": Hello " + firstName + "!"); }, 50);
    };
    for (var j = 0; j < 3; j++) {
        _loop_1(j);
    }
}
veryFriendlyGreeter('John');
