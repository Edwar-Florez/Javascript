// 8. Imprimir número medio de tres números únicos.
function numeroMedio(a, b, c) {
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    let medio = a + b + c - max - min;
    console.log(`Número medio: ${medio}`);
}