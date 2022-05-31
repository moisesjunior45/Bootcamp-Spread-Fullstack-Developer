const alunos = [
    {
        nome: 'Moisés',
        nota: 10,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1A',
    },
    {
        nome: 'Paulo',
        nota: 5,
        turma: '2C',
    },
];  

function alunosAprovados(array, media) {    
    
    let aprovados = [];
    
    for (let i = 0; i < array.length; i++) {
        
        const {nota, nome} = array[i];
        
        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6)); 