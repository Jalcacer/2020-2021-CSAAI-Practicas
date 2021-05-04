//Lo primero es llamar a las variables del codigo html para trabajar con ellas desde aqui
display = document.getElementById("display");
igual = document.getElementById("igual");
borrar = document.getElementById(borrar);
reset = document.getElementById(borrar);
sqrt = document.getElementsByName("sqrt");
ans = document.getElementById("ans");
let numeros = document.getElementsByClassName("n");
let operacion = document.getElementsByClassName("operacion");


//Ahora trabajo en los estados de la calculadora

const Estados = {
    Inicio : 0,
    Opcion1 : 1,
    Operar : 2,
    Opcion2 : 3,
}

//Hago que la calculadora se inicie en el estado 0

let estado = Estados.Inicio;

// Con este if defino los estados 

function calculadora (numeros){
    if (estado == Estados.Inicio){
        display.innerHTML = numeros;
        estado = Estados.Op1;
    }else if (estado == Estados.Opcion1){
        display.innerHTML += numeros;
    }else if (estado == Estados.Operar){
        display.innerHTML += numeros;
    }else if (estado == Estados.Opcion2){
        display.innerHTML += numeros;
    }
}

// con estos bucles y funcion , evaluo los numeros que se pulsen, 
// evaluo las operaciones y hago que se oase al siguiente estado 
for (i=0; i<numeros.length; i++){
    numeros[i].onclick = (ev) =>{
        calculadora(ev.target.value);
    }
}

function calculos(operador){
    if (estado != Estados.Operar){
        display.innerHTML += oprador;
        estado = Estados.Operar;
    }
}

for (i = 0; i<operacion.length; i++){
    operacion[i].onclick = (ev) => {
        if(estado == Estados.Opcion1){
            display.innerHTML += ev.target.value;
            estado = Estados.Operar;
        }
    }
}

//Evaluacion de las teclas cuando estas sean pulsadas

igual.onclick = () => {
    display.innerHTML = eval(display.innerHTML);
    ans.value = display.innerHTML;
    estado = Estados.Opcion1;
}

ans.onclick = () => {
    display.innerHTML += ans.value;
    estado = Estados.Opcion2;
 }

 reset.onclick = () => {
    display.innerHTML = "0";
    estado = Estados.Inicio;
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