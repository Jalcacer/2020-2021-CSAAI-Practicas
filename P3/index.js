console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 520;
canvas.height = 400;

const ctx = canvas.getContext("2d");
//variables importantes para el juego
    var x = canvas.width /2;
    var y =  canvas.height - 50;
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

const ladrillos = [];




function update(){
    pelota();
    requestAnimationFrame(updates);
}
update();