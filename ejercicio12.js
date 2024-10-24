// 12. Calcular comisión total de un vendedor.
function calcularComisiones(precios) {
    let comisionTotal = 0;
    let menor2000 = 0;
    let mayorIgual2000 = 0;

    for (let precio of precios) {
        if (precio < 2000) {
            comisionTotal += precio * 0.03;
            menor2000++;
        } else {
            comisionTotal += precio * 0.05;
            mayorIgual2000++;
        }
    }

    console.log(`Comisión total: ${comisionTotal}, Ventas < 2000: ${menor2000}, Ventas >= 2000: ${mayorIgual2000}`);
}