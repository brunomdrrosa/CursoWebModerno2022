// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

// Exemplo:
// recerberMelhorEstudante({
// Joao: [8, 7.6, 8.9, 6], // média 7.625
// Mariana: [9, 6.6, 7.9, 8], // média 7.875
// Carla: [7, 7, 8, 9] // média 7.75
// }) // retornará { nome: "Mariana", media: 7.875 }

function receberMelhorEstudante(estudantes) {
  const melhorEstudante = Object.entries(estudantes).reduce(
    (melhor, [nome, notas]) => {
      const media = notas.reduce((total, nota) => total + nota) / notas.length;
      if (media > melhor.media) {
        return { nome, media };
      }
      return melhor;
    },
    { nome: '', media: 0 }
  );
  return melhorEstudante;
}

console.log(
  receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
  })
);
