function somar(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
}
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3)); //Posso passar sem algum porômetro.
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());
console.log("Fim");

//Para não precisar passar todos os parâmetros é só colocar os valores padrões deles como = 0.
//E se passar mais parâmetros aqui em baixo no caso valores ele vai ignorar.
