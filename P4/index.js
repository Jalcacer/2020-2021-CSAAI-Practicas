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
}
//Funcion deslizadores
function RGB (){
range_value_R.innerHTML = R.value;
range_value_R.innerHTML = G.value;
range_value_R.innerHTML = B.value;
}