// 13. Hallar la nota total de una materia.
function evaluarNota(nota1, nota2, nota3) {
    let total = (nota1 + nota2 + nota3) / 3;
    console.log(total >= 3 ? "Ganó" : "Reprobó");
}