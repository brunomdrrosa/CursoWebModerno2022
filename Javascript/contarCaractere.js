// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.

// Exemplos:
// contarCaractere("r", "A sorte favorece os audazes") // retornará 2
// contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1

function contarCaractere(caractere, string) {
  return string.split(caractere).length - 1;
}

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));