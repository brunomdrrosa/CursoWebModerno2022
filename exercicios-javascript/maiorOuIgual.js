// Crie uma função que receba dois números e retorne se o primeiro é igual ao segundo.

// Exemplos:
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual(5, 1) // retornará false

function maiorOuIgual(n1, n2) {
  if (n1 === n2) {
      return true;
  }  else {
      return false;
  }
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));