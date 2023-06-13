function sempreRetornoUm() {
  return 1000;
}

let resultado = textoOuNumero(false);
function textoOuNumero(retornaTexto) {
  if (retornaTexto) {
    return "Sou um texto!";
  } else {
    return 123;
  }
}

let valor = sempreRetornoUm() + 44;
console.log(valor);

console.log(resultado);
