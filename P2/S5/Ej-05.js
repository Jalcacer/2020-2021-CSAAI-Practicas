console.log("Ejecutando JS...");

//Crear objeto gui, con los elementos de la interfaz grafica
//Al tenerlo agrupoado podemos pasarlo como parametro o asignarselo
//a otro objeto
const gui= {
    //Elementos gui del contador 1
    display1: document.getElementById("dispaly1"),
    boton_inc1: document.getElementById("boton_inc1"),
    boton_dec1: document.getElementById("boton_dec1"),

    //Elementos gui del contador2
    display2: document.getElementById("display2"),
    boton_inc2: document.getElementById("boton_inc2"),
    boton_dec: document.getElementById("botn-dec2"),
}
class counter { //Ejemplo 6
//Constructor del objeto
//Se le pasa como parametro su display
constructor(display){
    this.valor = 0;

    //Almacenar su display
    this.display = display;

    //Actualizar el contador
    //y mostrarlo en el display
    this.inc = (value) => {
        this.valor += value;
        this.display.innerHtml = this.valor;
    }
}
}
//Crear los objetos contadores
const c1 = new counter(gui.display1);
const c2 = new counter(gui.display2);

//Acciones:
//Contador 1: Incrementar contador
gui.boton_inc1.onclick = () => {
    c1.inc(1);
}

//Decrementar contador
gui.boton_dec1.onclick = () => {
    c2.inc(-1);
}

//Contador 2: INcrementar contador 
gui.boton_inc2.onclick = () => {
    c2.inc(1);
}

//Decrementar contador
gui.botn_dec2.onclick = () =>{
    c2.inc(-1);
}
