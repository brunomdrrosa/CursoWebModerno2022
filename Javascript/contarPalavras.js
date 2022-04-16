// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

// Exemplos:
// contarPalavras("Sou uma frase") // retornará 3
// contarPalavras("Me divirto aprendendo a programar") // retornará 5

function contarPalavras(frase) {
  return frase.split(" ").length;
}

console.log(contarPalavras("Sou uma frase"));
console.log(contarPalavras("Me divirto aprendendo a programar"));