// Parâmetro (nota) -> Retorno (conceito).

function exibirQualAluno(nota) {
  if (nota === 5) {
    return "F";
  } else if (nota === 6) {
    return "E";
  } else if (nota === 7) {
    return "D";
  } else if (nota === 8) {
    return "C";
  } else if (nota === 9) {
    return "B";
  } else if (nota === 10) {
    return "A";
  } else {
    return undefined;
  }
}

let notaAluno = 8;
console.log(exibirQualAluno(notaAluno));
