// 3. Aplicar aumento del 15% al sueldo si es inferior a $300.000.
function aplicarAumento(sueldo) {
    if (sueldo < 300000) {
        sueldo *= 1.15;
    }
    return sueldo;
}