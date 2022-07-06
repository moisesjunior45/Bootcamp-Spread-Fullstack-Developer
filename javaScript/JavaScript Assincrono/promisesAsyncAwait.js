// Promises - Objeto de processamento assíncrono
// Possui 3 estados: Pending(Pendente), Fullfilled(Completado) e Rejected(Rejeitado)

const myPromise = new Promise((resolve, rejected) => {
    window.setTimeout(() => {
        resolve('Resolvida');
    }, 2000);
});

console.log(myPromise)