console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagen1');
const ctx = canvas.getContext('2d');


imagen1.onload = function () {

  console.log("Imagen cargada");
  canvas.width = imagen1.width;
  canvas.height = imagen1.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

   //-- Obtener la imagen del canvas en pixeles
   let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

   //-- Obtener el array con todos los píxeles
   let data = imgData.data
 
   //-- Obtener el numero total de elementos en el array
   console.log("Tamaño de data: " + data.length)
 
   //-- El número total de pixeles es la altura por la anchura
   npixels = canvas.width * canvas.height

   console.log("Anchura (en pixeles): " + canvas.width)
   console.log("Altura (en pixeles): " + canvas.height)
   console.log("Pixeles totales: " + npixels)
 
   //-- Puesto que cada pixel ocupa 4 bytes, el array de píxeles
   //-- tiene un tamaño de 4 * numero de pixeles
   console.log("Total de datos de la imagen: " + npixels * 4)
 };

console.log("Fin...");