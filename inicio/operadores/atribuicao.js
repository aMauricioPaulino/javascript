// O mais comum é o operador (=). Ou seja (a = 4), é correto falar que a recebe 4 e não que a é igual a 4.
// Exemplos de atribuição:

// += ATRIBUIÇÃO ADITIVA
// -= ATRIBUIÇÃO SUBTRATIVA
// *= ATRIBUIÇÃO MULTIPLICATIVA

// Se eu quiser mudar o valor da variável mas ainda quiser deixar o primeiro valor é assim que se faz:
// a = 5;
//
//a = 3 + a;
//a = a + 3;
//a = a - 7;
//a = a * 3;

let x = 10;
x = x + 6;
x = x - 1;


//Aqui mais abaixo vemos uma forma de fazer a mesma coisa de cima mais só que de um forma mais prática.
let y = 20;
y += 10;
y -= 2;
y *= 2;
y /= 4;
y %= 2;

console.log(x)
console.log(y)

// Serve tbm para a concatenação de textos. Exemplo:

let w = 'texto';
w += ', mais texto';
console.log(w)