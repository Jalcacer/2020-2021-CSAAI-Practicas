console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 520;
canvas.height = 400;

const ctx = canvas.getContext("2d");

let ball = {
    x: canvas.width /2,
    y: canvas.height - 50,
    dx: 0,
    dy: 0,
    radius: 7,
    draw: function() {
        ctx.beginPath();

        //-- Dibujar un circulo: coordenadas x,y del centro
        //-- Radio, Angulo inicial y angulo final
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.lineWidth = 3;
        ctx.fillStyle = 'red';

        //-- Dibujar el trazos
        ctx.stroke()

        //-- Dibujar el relleno
        ctx.fill()
    
        ctx.closePath();
    }    
}
function update(){
    ball.draw();
    requestAnimationFrame(update);
}
update();