function criarData(dia, mes, ano) {
  return {
    dia: dia,
    mes: mes,
    ano: ano,
    exibir: function () {
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
