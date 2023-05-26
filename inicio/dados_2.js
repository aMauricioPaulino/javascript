// O jeito certo de como criar variáveis ( let identificador = valor;).
// Tentar escolher bons nomes como identificador para o código ficar claro.
// O (;) Não vai influir para o código funcionar mas melhor usar para melhor organizar.
// Só não se usar ("") dentro do console.log para palavras quando ela é uma variável.

let preco = 19.90;
let desconto = 0.4;

console.log (19.90 * 0.6); //Sempre quando números ou palavras então soltas para ser impressos eles são valores literais.

console.log (preco * (1 - desconto)); //Como no pseudocódigo se dá prioridade para ser executada a equação usando ().


let precoComDesconto = preco * (1- desconto);
console.log(precoComDesconto); //Quando o identificador for mais de uma palavra as sequentes terão que ser com letras maiúsculas.

// Outros exemplos

let nome =  "Caderno"; // O nome dessa variável é (STRING ou TEXTO) que significa sequencia de símbolos.
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria + ", Preço: " + preco
+ ", Desconto: " + desconto); // O + é usando pra juntar ou seja fazer um concatenação, isso para strings.


