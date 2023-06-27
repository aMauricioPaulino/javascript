//Aqui o professor mostra formas de simplificar o código.

function criarData(dia, mes, ano) {
  return {
    dia, //posso tirar as chaves do Objeto para simplificar que vai dar certo do mesmo jeito
    mes,
    ano,
    exibir() {
      //tirando os : da chave e a função tbm vai funcionar e ele vai entender que é uma função.
      return `${this.dia}/${this.mes}/${this.ano}`;
    },
  };
}

const d1 = criarData(10, 20, 2020);
const d2 = criarData(12, 22, 2022);
const d3 = criarData(14, 24, 2024);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
