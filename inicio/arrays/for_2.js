const notas = [7, 11, 19, 2, 4, 5, 0];

//foreach

for (let nota of notas) {
  console.log(nota); // faz a mesma coisa do exemplo passado só que mais simples.
}
console.log("\n");
//Mais uma exemplo de como fazer mais mostrando mais organizado.

let valores = "";
for (let nota of notas) {
  valores += nota + " ";
}

console.log(valores);

//Aqui temos o exemplo de como exibir os indices.

let indices = "";
for (let ind in notas) {
  indices += ind + " ";
}

console.log(indices);
