// Criar uma função para mostrar quem ganhou o jogo. retornar um se o primeiro time ganhou se o segundo ganhou e 0 se o terceiro ganhou.

function qualTime(a, b) {
  if (a > b) {
    return "Coringão meteu chibata!";
  }
  if (a < b) {
    return "O porco ganhou!!!";
  }
  if (a === b) {
    return "Empate!!!";
  }
}

let ct = 4;
let pl = 0;

console.log(qualTime(ct, pl));
