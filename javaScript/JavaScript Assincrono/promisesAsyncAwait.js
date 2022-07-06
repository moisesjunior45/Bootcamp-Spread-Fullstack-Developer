// Promises - Objeto de processamento assíncrono
// Possui 3 estados: Pending(Pendente), Fullfilled(Completado) e Rejected(Rejeitado)

const myPromise = new Promise((resolve, rejected) => {
    window.setTimeout(() => {
        resolve('Resolvida');
    }, 3000);
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"

// async - Define uma função assíncrona, que retorna um objeto AsyncFunction.
// await - Pausa a execução da função assíncrona e espera pela resolução da Promise passada,
//  e depois retoma a execução da função assíncrona e retorna o valor resolvido.

async function resolvePromise2() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });
    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved;
}

// Utilizando try...catch

async function resolvePromise3() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    let result;

    try {
        result = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou')
    } catch (err) {
        result = err.message;
    }
    return result;
}