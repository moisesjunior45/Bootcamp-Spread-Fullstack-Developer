// Solução 1
function verificarPalindromo(string) {
    if (!string) return "string inexistente";

    //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
    // O método reverse() inverte os itens de um array.
    // O método join() junta todos os elementos de um array em uma string e retorna esta string.

    return string.split("").reverse().join("") === string;
}

// console.log(verificarPalindromo("ovo"));

// Solução 2
function verificarPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificarPalindromo2("ovo"));