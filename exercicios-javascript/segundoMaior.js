// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

// Exemplos:
// segundoMaior([12, 16, 1, 5]) // retornará 12
// segundoMaior([8, 4, 5, 6]) // retornará 6

function segundoMaior(numeros) {
  const ordenados = numeros.sort((a, b) => a - b);
  return ordenados[ordenados.length - 2];
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));