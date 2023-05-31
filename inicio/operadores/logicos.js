let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;


let resultadoE = " #1 - VAI PRO SHOPPING? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = " #2 - VAI PRO SHOPPING? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);
console.log("\n")

//Exemplo pra o (OU EXCLUSIVO) USA-SE o (!=) diferente para fazer, com o mostra o exemplo a baixo.

console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false != false);
console.log("\n")

// Acabei entendendo que essa formula meio que uma "gambiarra", pq no final das contas ele precisa que o valor volte true or false e com o operador de diferente ele vai fazer isso.

//---------------------------------------------------------------------------

// Aqui mais a baixa vemos o unário. Ou seja a tabela negação.

console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !false); 
