// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
// função) e com ponto de exclamação "!" no final.
// Exemplo:
// cumprimentar("Leonardo") // retornará "Olá, Leonardo!"

function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Bruno"))

// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// 📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
// desconsidere também dias decorridos desde o último aniversário.
// Exemplo:
// converterIdadeEmAnosParaDias(25) // retornará 9125

function converterIdadeParaDias(idade) {
    return idade * 365;
}
console.log(converterIdadeParaDias(25))

// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês.
// Exemplo:
// calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
function calcularSalario(horas, ganho) {
    return `Salário igual a R$ ${horas * ganho}`;
}
console.log(calcularSalario(150, 40.5))

// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
// Exemplos:
// nomeDoMes(1) // retornará "janeiro"
function nomeMes(numero) {
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro",
    "outubro", "novembro", "dezembro"];
    return meses[--numero];
}
console.log(nomeMes(8))

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
console.log(maiorOuIgual(0, 0))

// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".
// Exemplos:
// inverso(true) // retornará false
// inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
// inverso(-2000) // retornará 2000
// inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"
function inverso(valor) {
  if (typeof valor === "boolean") {
    return !valor;
  } else if (typeof valor === "number") {
    return -valor;
  } else {
    return "booleano ou número esperados, mas o parâmetro é do tipo " + typeof valor;
  }
}
console.log(inverso(true));