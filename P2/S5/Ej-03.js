console.log("Ejecutando JS...")
//Crear objeto gui, con los elementos de la interfaz grafica
//Al tenerlo agrupado podemos pasarlo como parametro o asignarselo
//a otro objeto 
const gui = {
    display: document.getElementById("display"),
    boton: document.getElementById("boton"),
}


//Objeto contador: Contiene el valor y el metodo para incrementarse
const counter = {
    valor: 0,
    inc : function(value){
        this.valor += value;
        gui.display.innerHTML = this.valor;
    }
}
//Acciones: Ligar el boton al contador
gui.boton.onclick = () => {
    counter.inc(1)
}
