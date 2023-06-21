const numeros = [1, 2, 3, 4, 5];
const numeros2 = numeros.concat(7, 8, 9);

numeros[0] = 100; //Serve para mudar um valor pelo índice do ARRAY.
numeros.push(6); //Serve para adicionar um valor ao ARRAY.
numeros.join("-"); //Serve para escolher qual simbolo vai separar os valores do ARRAY. Obs: Tem que colocar assim console.log(numeros.loin("-"));
numeros.concat(7, 8, 9); //Serve para concatenar valores dentro do ARRAY. ele não vai juntar mais vai criar outro ARRAY. Para dar centro tem que ser como uma variável.
numeros.includes(10); //Serve para identificar se o valor sugerido é do ARRAY com TRUE OR FALSE.
numeros.indexOf(4); //Serve para saber qual índice esta alinhado ao valor que foi sugerido.

console.log(numeros);
console.log(numeros.join(" - "));
console.log(numeros2);
console.log(numeros.includes(10));
console.log(numeros.indexOf(4));
