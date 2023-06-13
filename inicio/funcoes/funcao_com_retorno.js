function sempreRetornoUm() {
  return 1000;
}

function textoOuNumero(retornaTexto) {
  if (retornaTexto) {
    return "Sou um texto!";
  } else {
    return 123 + sempreRetornoUm();
  }
}

let valor = sempreRetornoUm() + 44;

console.log(valor);

console.log(textoOuNumero());
