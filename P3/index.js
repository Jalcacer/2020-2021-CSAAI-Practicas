console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 520;
canvas.height = 400;

const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(100, 50, 10, 0, 2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.fillStyle = 'red';

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()
