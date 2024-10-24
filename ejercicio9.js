// 9. Ordenar tres números enteros únicos de mayor a menor.
function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => y - x);
    console.log(`Ordenados: ${numeros}`);
}