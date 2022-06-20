function filtrarPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 67, 45, 10, 24, 12, 6, 5, 16];

console.log(filtrarPares(meuArray));