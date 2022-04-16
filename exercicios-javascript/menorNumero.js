// Criar uma função que receba um array de números e retorne o menor número desse array.

// Exemplos:
// menorNumero([10, 5, 35, 65]) // retornará 5
// menorNumero([5, -15, 50, 3]) // retornará -15

function menorNumero(numeros) {
  return Math.min(...numeros);
}

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));