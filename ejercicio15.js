// 15. Evaluar fórmula cuadrática.
function resolverEcuacionCuadratica(a, b, c) {
    let discriminante = b * b - 4 * a * c;
    if (discriminante > 0) {
        let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        console.log(`Raíces: ${raiz1}, ${raiz2}`);
    } else if (discriminante === 0) {
        let raiz = -b / (2 * a);
        console.log(`Raíz doble: ${raiz}`);
    } else {
        console.log("Sin raíces reales");
    }
}