// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.

// Exemplos:
// areaDoTriangulo(10, 15) // retornará 75.00
// areaDoTriangulo(7, 9) // retornará 31.50
// areaDoTriangulo(9.25, 13.1) // retornará 60.59

function areaDoTriangulo(base, altura) {
  return ((base * altura) / 2).toFixed(2);
}

console.log(areaDoTriangulo(10, 15));
console.log(areaDoTriangulo(7, 9));
console.log(areaDoTriangulo(9.25, 13.1));