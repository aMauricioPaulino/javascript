const cliente = {
  codigo: "1234",
  nome: "Maurício",
  vip: true,
  endereco: {
    logradouro: "Rua A C D",
    numero: 521,
    complemento: "Casa",
    pontosRef: ["Perto do shopping borel"],
  },
  nomeFilhos: ["Bia", "Danilo"],
};

//Posso atribuir tudo dentro de um OBJETO.

console.log(cliente);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0]);
