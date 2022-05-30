function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));   //Spread - uma forma de lidar separadamente com elementos '...'

function confereTamanho(...args) {  //Rest - combina os argumentos em um array
    console.log(args.length);
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(3, 4, 5);