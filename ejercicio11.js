// 11. Aceptar o rechazar una pieza en forma de varilla.
function evaluarPieza(longitud, diametro) {
    const densidad = 3.5;
    const masa = diametro * longitud * densidad;
    if (longitud > 7.5 && longitud <= 9 && diametro >= 0.5 && diametro <= 1.3 && masa <= 5.8) {
        console.log("Pieza aceptada");
    } else {
        console.log("Pieza rechazada");
    }
}