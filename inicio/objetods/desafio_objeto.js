// data (dia, mes, ano)
//Ter método: exibir -> "dia/mes/ano"

const data = {
  dia: 26,
  mes: 6,
  ano: 2023,
  exibirData: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(data.exibirData());
