//Crear objeto gui, con los elementos de la interfaz grafica
//Al tenerlo agrupado podemos pasarlo como parametro o asignarselo
//a otro objeto
const gui = {
    display: document.getElementById("display"),
    boton_inc: document.getElementById("boton_inc"),
    boton_dec: document.getElementById("boton_dec")
}

//Objeto contador: Contiene el valor y el metodo para incrementarse
const counter = {
    valor: 0,
    inc : function(value){
        this.valor += value;
        gui.display.innerHTML = this.valor;
    }
}

//Acciones:
gui.boton_inc.onclick = () =>{
    counter.inc(1);
}

//Decrementar contador
gui.boton_dec.onclick = () => {
    counter.inc(-1);
}