// 6. Convertir grados Celsius a Kelvin o evaluar un número flotante.
function evaluarEntrada(entrada) {
    if (Number.isInteger(entrada)) {
        let kelvin = entrada + 273.15;
        console.log(`Grados Kelvin: ${kelvin}`);
    } else if (typeof entrada === "number") {
        if (entrada > 10.5) {
            console.log("Número flotante mayor a 10.5");
        }
    } else if (typeof entrada === "string") {
        console.log(`Tu nombre es: ${entrada}`);
    }
}