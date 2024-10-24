// 4. Asignar sueldo a cinco empleados según su categoría.
function asignarSueldos(categorias) {
    let sueldos = [];
    for (let categoria of categorias) {
        let sueldo;
        if (categoria === 'A') sueldo = 500000;
        else if (categoria === 'B') sueldo = 400000;
        else if (categoria === 'C') sueldo = 300000;
        else sueldo = 200000; // Otros
        sueldos.push(sueldo);
    }
    return sueldos;
}