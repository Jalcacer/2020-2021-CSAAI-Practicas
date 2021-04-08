function manejador_parrafo()
{
    console.log("Click sobre el parrafo...");
}

console.log("Ejecutando js...");

// leer parrado test
const test = document.getElementById('test');
//Configurar el manejador para el evento de
//pulsacion de boton: que se ejecute la 
//funcion manejador_parrafo()
test.onclick = manejador_parrafo;