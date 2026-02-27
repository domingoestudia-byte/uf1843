let edad = prompt("dame tu edad")

function acceso(edad) {
    if (edad < 18) {
        return "acceso denegado"
    } else if (edad >= 18 && edad <= 68) {
        return "permitido"
    } else {
        return "acceso senior"
    }
}
console.log(acceso(edad))


let num = prompt("dame un numero")
function multi(i) {

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    } 
    if(i <= 1) {
        console.log("numero no valido");
    }
}
console.log(multi())


let opcion = prompt("dame un numero del 1 al 10")

function menu(opcion) {
    if (opcion == 1) {
        return "Has elegido inicio"
    } else if (opcion == 2) {
        return  "Has elegido productos"
    } else if (opcion == 3) {
        return  "Has elegido Contacto"
    } else {
        return "Opcion no valida"
    }
}
console.log(menu(opcion))
