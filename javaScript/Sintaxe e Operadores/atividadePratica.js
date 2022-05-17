//  Atividade
// Crie uma função que recebe dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

function numeros(num1,num2) {

    let frase1, frase2, frase3;

    (num1 === num2) ? ( frase1 = "são iguais") : (frase1 = "Não são iguais");
   
    (num1 + num2 > 10) ? (frase2 = "Maior") : (frase2 = "Menor");
    
    (num1 + num2 < 20) ? (frase3 = "Menor") : (frase3 = "Maior");
    
    console.log(`Os números ${num1} e ${num2} ${frase1}. Sua soma é ${num1+num2}, que é ${frase2} que 10 e ${frase3} que 20`);
}
    numeros(2,50)