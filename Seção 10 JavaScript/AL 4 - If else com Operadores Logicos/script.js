var nota = prompt('Digite a nota do aluno:')
var faltas = prompt('Digite a quantidade de faltas:')

var media = 7
var faltas_maximas = 15

if (nota >= media && faltas <= faltas_maximas){
    document.write('Aprovado')
} else {
    document.write('Reprovado')
}