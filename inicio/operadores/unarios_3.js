console.log (!true);
console.log(!false);

console.log(!! 'texto'); //A dupla negação serve para vc saber o real valor boleano daquilo. No caso da string nós não sabíamos se ela era true ou false.
console.log(!! ''); // Nesse caso aqui podemos ver que nem toda string é true, se ela estiver vazia o valor dela passa a ser false. obs: se tiver um espaço que seja ele ja volta a ser true.

console.log(!!1); //Aqui temos os exemplos de numbers. Todo number vai ser true com a exerção do 0.
console.log(!!0);
console.log(!!-1);
console.log(!!-0.000004);