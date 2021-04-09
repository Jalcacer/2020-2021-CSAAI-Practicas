//Leemos parrafo test2
const test2 = document.getElementById('test2');

//Obtenemos el elemento parrafo 1 para modificarlo
const test1 = document.getElementById('test1');

//Configuramos el manejador para el evento
//pulsacion de boton

test2.onclick = () => { //Esto se pone para definir una funcion
    console.log("Click sobre parrafo 2...")

    //Cambiamos su texto
    test1.innerHTML = "Cambio de texto"
}