function retornaUmaFuncao() {
  return function () {
    return function () {
      return "Boa tarde";
    };
  };
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()()());

const chamando = retornaUmaFuncao()()();

console.log(chamando);
