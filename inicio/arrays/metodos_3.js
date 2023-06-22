const numeros = [10, 20, 30, 40, 50];

function praCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}
numeros.forEach(praCadaElemento);
console.log("\n");

numeros.forEach(function (ele) {
  console.log(ele);
});

/*for (let n of numeros) {
  console.log(n);
}*/

/*for (let i = 0; i < numeros.length; index++) {
    console.log(numeros[i])];
    
}*/
