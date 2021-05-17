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

//Dibunjamos la imagen sin cambios
  ctx.drawImage(img, 0,0);

//La pasamos a pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//obtenemos un array de pixeles 
  let data = imgData.data;

//Obtenemos los umbrales de los deslizadores
  umbral_R = R.value
  umbral_G = G.value
  umbral_B = B.value
//Cambiamos la imagen segun el nuevo umbral

  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_R)
      data[i] = umbral_R;

    if (data[i+1] > umbral_G)
      data[i+1] = umbral_G;

    if (data[i+2] > umbral_B)
      data[i+2] = umbral_B;
}

// Dibujamos esta vez la imagen modificada 
  ctx.putImageData(imgData, 0, 0);
}