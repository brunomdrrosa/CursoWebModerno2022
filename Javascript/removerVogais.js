// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.

// Exemplos:
// removerVogais("Cod3r") // retornará "Cd3r"
// removerVogais("Fundamentos") // retornará "Fndmnts"

function removerVogais(frase) {
  return frase.replace(/[aeiou]/ig, "");
}

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));