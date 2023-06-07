const hora = 10;
let saudacao;

if (hora < 12) {
  saudacao = "Bom dia";
} else {
  saudacao = "Boa tarde";
}

if (hora >= 18 && hora <= 24) {
  saudacao = "Boa noite";
}

console.log(saudacao);

//O professor fez assim.
//const hora = 10;
//let saudacao;

//if (hora < 12) {
//  saudacao = "Bom dia";
//} else {
//    if(hora < 18){
 // saudacao = "Boa tarde";}
// else {
    //saudacao = "Boa noite";
//}}


