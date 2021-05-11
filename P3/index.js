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
function update(){
    pelota();
    requestAnimationFrame(updates);
}
update();