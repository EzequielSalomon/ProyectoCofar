document.getElementById('repartos').addEventListener('change', function () {
    let seleccion = document.getElementById('repartos').value;

console.log("hola")
    switch (seleccion) {
        case 'cba':
            alert("Tiene 3 repartos diarios de Lunes a Sabados");
            break;
        case 'r4':
            alert("Tiene 2 repartos diarios de Lunes a Sabados");
            break;
        case 'vme':
            alert("Solo puede retirar por mostrador, dirigiendose a la sucursal");
            break;
        case 'vma':
            alert("Tiene 3 repartos diarios de Lunes a Sabados");
            break;
    }
});