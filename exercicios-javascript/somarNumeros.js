// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

// Exemplos:
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60

function somarNumeros(numeros) {
  const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
  return soma;
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
