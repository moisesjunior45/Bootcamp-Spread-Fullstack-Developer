function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if (typeof num !== 'number') throw new TypeError("Envie um número");

        if (arr.length !== num) throw new RangeError("Tamanho inválido");

        return arr;
    }

    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este é um erro de ReferenceError!");
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log("Este é um erro de RangeError!");
            console.log(e.message);
            console.log(e.stack);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }

}

console.log(validaArray([1, 2, 3, 4, 5], 5));