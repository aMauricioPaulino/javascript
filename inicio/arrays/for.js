const numeros = [1, 2, 3, 4, 5, 6, 11, 45, 100];

for (let i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i]);

  for (let i = 0; i < numeros.length; i += 2) {
    console.log(i, numeros[i]);
  }
} // Usado para pular de 2 em 2 valores dentro do ARRAY.