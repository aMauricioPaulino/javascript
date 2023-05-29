// OBS: A linguagem JS é tida como um tipagem fraca por conta dela deixar qualquer valor ser atribuído a uma variável.

let a = 1;
let b = "1";
let c = "1";

console.log(a == b); // Aqui ele vai dar verdadeiro pq ele está apenas perguntando se os conteúdos são iguais.
console.log(a === b); // Aqui vai dar falso pq ele está perguntando se os valores são estritamente iguais, ou seja se são do mesmo tipo e vai dar falsa pq um  é texto e o outro é número.
console.log(b === c); // Mais um exemplo para dar verdadeiro.
console.log("\n");

console.log (a != b); // Do mesmo jeito para diferente, deu falso por ele está comparando os conteúdos.
console.log (a !== b);// Aqui novamente ele analisou os valores e detectou uma string e um number.
console.log (b !== b);// ''

//OBS: É sempre melhor usar a igualdade e a diferença estrita pra dar mais segurança ao código.