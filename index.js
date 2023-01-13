function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function yego() { }
}

function returnsAnAnonymousFunction() {
    return function () { }
}