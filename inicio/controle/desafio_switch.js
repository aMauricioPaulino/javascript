let nota = 6.8;

switch (Math.ceil(nota)) {
  default:
    console.log("Nota invalida");
    break;
  case 10:
    console.log("A+");
    break;
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B+");
    break;
  case 7:
    console.log("B");
    break;
  case 6:
    console.log("C+");
    break;
  case 5:
    console.log("C");
    break;
  case 4:
    console.log("D+");
    break;
  case 3:
    console.log("D");
    break;
  case 2:
    console.log("E+");
    break;
  case 1:
    console.log("E");
    break;
  case 0:
    console.log("F");
}

console.log("fim...");
