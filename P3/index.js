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

// Variables de la raqueta
    var largo = 60;
    var alto = 5;
    var xraq =(canvas.width - largo)/2;
    var yraq =canvas.height - 55;

// Variables movimiento raqueta

    var rightPressed = false;
    var leftPressed = false;
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

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

const LADRILLO = {
    F: 6,   //-- Filas
    C: 13,   //-- Columnas
    w: 40,  //-- Anchura
    h: 30,  //-- Altura
    padding: 10,  //-- Espacio alrededor del ladrillo
    visible: true //-- Estado del ladrillo: activo o no
  }

//-- Creación de los ladrillos. La estructura se almacena 
//-- en el objeto ladrillos, que inicialmente está vacío
const ladrillo = [];

//-- Recorrer todas las filas. La variable i toma valores de 0 hasta F-1 (número de filas)
for (let i = 0; i < LADRILLO.F; i++) {

  ladrillo[i] = [];  //-- Inicializar la fila. Las filas son a su vez Arrays que inicialmente están vacíos

  //-- Recorrer las C columnas de la fila i. La variable j toma valores de 0 hasta C-1 (numero de columnas)
  for (let j = 0; j < LADRILLO.C; j++) {

    //-- Calcular valores para el ladrillo de la fila i y la columna j
    //-- Algunos valores son constates. Otros depeden de i y j
    ladrillo[i][j] = {
      x: (LADRILLO.w + LADRILLO.padding) * j,
      y: (LADRILLO.h + LADRILLO.padding) * i,
      w: LADRILLO.w,
      h: LADRILLO.h,
      padding: LADRILLO.padding,
      visible: LADRILLO.visible
    };
  }
}

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

for (let i = 0; i < LADRILLO.fila;i++){
    ladrillo[i] = [];

    for (let j = 0; j < LADRILLO.columnas; j++){
        ladrillo[i][j] = {
        x : (LADRILLO.ancho + LADRILLO.marco) *j,
        y : (LADRILLO.alto + LADRILLO.marco) * i,
        ancho : LADRILLO.ancho,
        alto : LADRILLO.alto,
        marco :  LADRILLO.marco,
        visible : LADRILLO.visible
        }
    }
}

// teclas para movimiento raqueta 
function keyDownHandler(e){
    if (e.keyCode == 39)//derecha
    {
        rightPressed = true;

    }else if (e.keyCode == 37 )//izq
    {
        leftPressed = true;
    }else if (e.keyCode == 32 )//izq
    {
        velx = 3;
        vely = -3;
    }   
}
function keyUpHandler(e){
        if (e.keyCode == 39)//derecha
        {
            rightPressed = false;
    
        }else if (e.keyCode == 37 )//izq
        {
            leftPressed = false;
        }
}


function main(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pelota();
    raqueta();

    //-- Dibujar ladrillos
    for (let i = 1; i < LADRILLO.F; i++) {
        for (let j = 1; j < LADRILLO.C; j++) {
        //-- Si el ladrillo es visible se pinta
            if (ladrillo[i][j].visible){   
                ctx.beginPath();
                ctx.rect(ladrillo[i][j].x, ladrillo[i][j].y, LADRILLO.w, LADRILLO.h);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.closePath();
            } 
        }
    }

    if (x + velx > canvas.width - radius || x + velx < radius ){
        velx = -velx;
    }
    if (y + vely < radius){
        vely = -vely;
    }else if (y + vely > canvas.height - radius){
        if (x > xraq && x < xraq + largo){
            velx = -velx;
            vely = -vely;        
        }
    }



    if(rightPressed && xraq < canvas.width - largo){
        xraq += 7;
    }else if(leftPressed && xraq > 0) {
        xraq -= 7;
    }
    x += velx;
    y += vely;
    requestAnimationFrame(main);
}
main();