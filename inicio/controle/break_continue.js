//Break
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

//Continue
//Aqui ele vai somente pular o 3 e continuar até o final do laço que seria o 5.

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
