// #1 Função com parâmetros e com retorno.
function somar(a, b) {
  return a + b;
}
console.log(somar(33, 3));
//Or
let resultado = somar(33, 3);
console.log(resultado);
//-------------------------------------------------------------------------

// #2 Função com parâmetros e sem retorno.
function exibirMultiplicacao(a, b) {
  console.log(a * b);
}

exibirMultiplicacao(2, 2);
exibirMultiplicacao(100, 20); // Posso chamar quantas vezes eu quiser.

//-------------------------------------------------------------------------

// #3 Função sem parâmetros e com retorno.
function retorneDataAtual() {
  return new Date();
}

console.log(retorneDataAtual());
//-------------------------------------------------------------------------

// #4 Função sem parâmetros e sem retorno.
function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual();
