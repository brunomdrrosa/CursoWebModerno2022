// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

// Exemplos:
// nomeDoMes(1) // retornará "janeiro"

function nomeMes(numero) {
  const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  return meses[--numero];
}

console.log(nomeMes(1));