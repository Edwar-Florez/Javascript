// 7. Imprimir nombre de hombre casado mayor de 40 o mujer soltera menor de 50.
function evaluarPersona(nombre, edad, sexo, estadoCivil) {
    if ((sexo === 'masculino' && estadoCivil === 'casado' && edad > 40) ||
        (sexo === 'femenino' && estadoCivil === 'soltera' && edad < 50)) {
        console.log(`Nombre: ${nombre}`);
    }
}