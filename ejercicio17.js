// 17. Leer tres números y decir si uno es divisible del otro.
function verificarDivisibilidad(a, b, c) {
    if (a % b === 0 || a % c === 0 || b % a === 0 || b % c === 0 || c % a === 0 || c % b === 0) {
        console.log("Hay divisibilidad entre los números");
    } else {
        console.log("No hay divisibilidad entre los números");
    }
}