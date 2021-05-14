console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 700;
canvas.height = 600;

const ctx = canvas.getContext("2d");

//variables importantes para el juego
    var x = canvas.width /2;
    var y =  canvas.height - 75;
    var radius = 7;
//Velocidades en los ejes de la pelota
    var velx = 0;
    var vely = 0;

    function pelota(){  
        ctx.beginPath();

        //-- Dibujar un circulo: coordenadas x,y del centro
        //-- Radio, Angulo inicial y angulo final
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.lineWidth = 3;
        ctx.fillStyle = 'red';
        //-- Dibujar el trazos
        ctx.stroke()

        //-- Dibujar el relleno
        ctx.fill()
    
        ctx.closePath();
    }
    



// Una vez dibujada la pelota debemos seguir con la raqueta donde rebotara 
// y con los ladrillos que el jugador debera romper
// Empezare con los ladrillos
const ladrillos = {
    fila:8,
    columnas:13,
    altura:20,
    ancho:60,
    marco:1,
    visible: true
}

const ladrillos2 = [];

// Variables de la raqueta
var largo = 60;
var alto = 5;
var xraq =(canvas.width - largo)/2;;
var yraq =canvas.height - 55;
// Raqueta 
function raqueta(){

    ctx.beginPath();
    ctx.rect(xraq, yraq, largo, alto,);
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';

    //-- Dibujar el trazos
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()

    ctx.closePath();
}


//filas y columnas de ladrillos

for (let i = 0; i < ladrillos.fila;i++){
    ladrillos2[i] = [];

    for (let j = 0; j < ladrillos.columnas; j++){
        ladrillos2[i][j] = {
        x : (ladrillos.ancho + ladrillos.marco) *j,
        y : (ladrillos.alto + ladrillos.marco) * i,
        ancho : ladrillos.ancho,
        alto : ladrillos.alto,
        marco :  ladrillos.marco,
        visible : ladrillos.visible
        }
    }
}



function update(){
    pelota();
    raqueta();
    requestAnimationFrame(update);
}
update();