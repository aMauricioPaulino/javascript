//Função Construtora (classe) -> Objeto.
//Quando é uma função construtora se usa letra maiúscula no começo da função.

function Data(dia = 1, mes = 2, ano = 2023) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;

  this.exibir = function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  };
}

const d1 = new Data();
const d2 = new Data(1, 2, 1023);
const d3 = new Data(4, 12, 4030);

console.log(d1);
console.log(d2);
console.log(d3);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
