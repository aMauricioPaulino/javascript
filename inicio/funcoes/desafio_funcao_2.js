// Parâmetro (nota) -> Retorno (conceito).

function exibirQualAluno(nota) {
  if (nota === 5) {
    return "F";
  }
  if (nota === 6) {
    return "E";
  }
  if (nota === 7) {
    return "D";
  }
  if (nota === 8) {
    return "C";
  }
  if (nota === 9) {
    return "B";
  }
  if (nota === 10) {
    return "A";
  } else {
    return undefined;
  }
}

let notaAluno = 8;
console.log(`O conceito do aluno é ${exibirQualAluno(notaAluno)}`);
