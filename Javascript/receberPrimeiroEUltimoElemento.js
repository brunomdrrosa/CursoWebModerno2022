// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
  const ultimoElemento = elementosRestantes.pop();
  return [primeiroElemento, ultimoElemento];
}

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));