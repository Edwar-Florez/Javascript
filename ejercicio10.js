// 10. Calcular calificación final como promedio de dos notas más altas.
function calcularPromedio(notas) {
    notas.sort((a, b) => b - a);
    let promedio = (notas[0] + notas[1]) / 2;
    console.log(`Calificación final: ${promedio}`);
}