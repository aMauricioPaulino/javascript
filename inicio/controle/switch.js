let nota = 8.5:

switch(Math.ceil(nota)) { //Math.ceil é para arredondar valores para cima.
    default:
        console.log('Nota invalida');
        break;
    case 10:   //Nesse caso podemos usar assim para CASES DO MESMO CASO.
    case 9:
    case 8:
    case 7: 
        console.log('Parabéns');
        break; //Serve para o laço parar por aqui e não acabar passando para a outra linha.
    case 3:
        console.log('Reprovado')
         break;
    case 2:
        console.log(' Muito Reprovado')

}

console.log('Fim...')