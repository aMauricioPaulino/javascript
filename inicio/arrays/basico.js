const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

console.log(notas);
console.log(notas.join(", "), notas[2], notas[3]);
console.log(notas[5]);

notas[4] = 8.7; //Aqui podemos modificar os valores dentro do ARRAY com métodos que ja vimos.
console.log(notas);

notas[4] = notas[4] + 1.3;
console.log(notas);
