//Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset: document.getElementById("reset")
}

console.log("Ejecutando JS...");

//Definir un objeto cronometro

const crono = new Crono(gui.display);

//Configurar las funciones de retrollamada
//Arranque del cronometro 
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}

//Detener el cronometro 
gui.stop.onclick = () =>{
    console.log("Stop!!");
    crono.stop();
}

//Reset del cronometro 
gui.rest.onclick = () => {
    console.log("Reset!!");
    crono.reset();
}