function agg (arr, el) {
    arr.push (el);
}

function rem (arr, el) {
    arr.pop (el);
}

let alumnos = ["Jose", "Maria", "Carlos"]
let nombre = prompt("Bienvenido, ingrese su nombre");
alert("Actualmente solo estan registrados los siguientes alumnos: " + alumnos.join(", "))
