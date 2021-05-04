//Lo primero es llamar a las variables del codigo html para trabajar con ellas desde aqui
display = document.getElementById("display");
igual = document.getElementById("igual");
borrar = document.getElementById("borrar");
reset = document.getElementById("resetear");
sqrt = document.getElementsByClassName("sqrt");
ans = document.getElementById("ans");
let numeros = document.getElementsByClassName("n");
let operacion = document.getElementsByClassName("operacion");

//Ahora definire los estados con los que trabaja la calculadora 

const Estado = {
    Inicio : 0,
    Op1 : 1,
    Operar : 2,
    Op2 : 3,
}

let estado = Estado.Inicio

    function calculadora(numeros)
    {
        if (estado == Estado.Inicio){
            display.innerHTML = numeros;
            estado = Estado.Op1;
        }else if (estado == Estado.Op1){
            display.innerHTML += numeros;
        }else if (estado == Estado.Operar){
            display.innerHTML += numeros;
        }else if (estado == Estado.Op2){
            display.innerHTML += numeros;
        }
    }

    for (i=0; i<numeros.length; i++){
        numeros[i].onclick = (ev) =>{
            calculadora(ev.target.value);
        }
    }

    function calculos(operador){
        if (estado != Estado.Operar){
            display.innerHTML += operador;
            estado = Estado.Operar;
        }
    }

    for (i = 0; i<operacion.length; i++){
        operacion[i].onclick = (ev) => {
            if(estado == Estado.Op1){
                display.innerHTML += ev.target.value;
                estado = Estado.Operar;
            }
        }
    }
    
    igual.onclick = () => {
        display.innerHTML = eval(display.innerHTML);
        ans.value = display.innerHTML;
        estado = Estado.Op1;
    }


    reset.onclick = () => {
        display.innerHTML = "0";
        estado = Estado.Inicio;
    }

    borrar.onclick = () => {
        if(display.innerHTML == "0"){
            display.innerHTML = "0";
        }else{
            display.innerHTML = display.innerHTML.slice(0,-1);
        }
    }

    sqrt.onclick = () => {
        display.innerHTML = Math.sqrt(display.innerHTML);
    }

    ans.onclick = () => {
        display.innerHTML += ans.value;
        estado = ESTADO.OP2;
     }