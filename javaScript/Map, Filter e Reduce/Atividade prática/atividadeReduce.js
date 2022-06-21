const lista = [
    {
        name: 'sabao em po',
        preco: 3.50,
    },

    {
        name: 'cereal',
        preco: 12,
    },

    {
        name: 'toalha',
        preco: 30,
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada ", index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));


















// Exemplo utilização do Reduce

// function somaNumeros(arr) {
//     return arr.reduce(function(prev, current) {
//         console.log({ prev });
//         console.log({ current });
//         return prev + current;
//     }, 0);
// }

// const arr = [1, 2];
// console.log(somaNumeros(arr));