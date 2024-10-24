// 5. Capturar tres números e imprimir mayor, menor y si son iguales.
function analizarNumeros(a, b, c) {
    let mayor = Math.max(a, b, c);
    let menor = Math.min(a, b, c);
    console.log(`Mayor: ${mayor}, Menor: ${menor}`);
    if (a === b && b === c) {
        console.log("Todos son iguales");
    } else if (a === b || b === c || a === c) {
        console.log("Hay números iguales");
    }
}