const t1 = true;
const t2 = false;

console.log('Vamos comprar a TV 50"? ' + (t1 && t2)); //AND
console.log('Vamos comprar a TV 32"? ' + (t1 !== t2)); //XOR
//obs: pra concatenar pode ser usado tanto o (+) como a (,) como eu aprendi la no pseudocódigo.

let tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete? ' + tomarSorvete); //OR

//Aqui usamos a tabela negação. ela aqui só vai ser true se o tomar sorvete for falso e assim ao contrario.
let ficarEmCasa = !tomarSorvete;
console.log('Vamos fixar em casa? ' + ficarEmCasa); //NOT

//OBS FINAL: posso muito bem fazer dentro do console log a declaração dos valores ou criar variáveis.